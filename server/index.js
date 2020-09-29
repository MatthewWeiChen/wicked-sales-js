require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/products', (req, res, next) => {
  const sql = `
    select "productId",
    "name",
    "price",
    "image",
    "shortDescription"
    from "products"
  `;

  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.get('/api/products/:productId', (req, res, next) => {
  const productId = parseInt(req.params.productId, 10);

  const sql = `
    select "productId",
    "name",
    "price",
    "image",
    "shortDescription",
    "longDescription"
    from "products"
    where "productId" = $1
  `;

  const params = [productId];

  db.query(sql, params)
    .then(result => {
      const product = result.rows[0];
      if (!product) {
        res.status(404).json({
          error: `Cannot find product with productId ${productId}`
        });
      } else {
        res.status(200).json(product);
      }
    })
    .catch(err => next(err));
});

app.get('/api/cart', (req, res, next) => {
  if (!req.session.cartId) {
    res.json({});
  } else {
    const sql = `
    select "c"."cartItemId",
      "c"."price",
      "p"."productId",
      "p"."image",
      "p"."name",
      "p"."shortDescription"
      from "cartItems" as "c"
      join "products" as "p" using("productId")
      where "c"."cartId" = $1
    `;

    const params = [req.session.cartId];

    db.query(sql, params)
      .then(result => {
        const cart = result.rows;
        res.status(200).json({ cart });
      });
  }

});

app.post('/api/cart', (req, res, next) => {
  const productId = parseInt(req.body.productId, 10);
  const cartOfPerson = req.session.cartId;
  if (productId < 0) {
    res.status(400).json({
      error: 'productId must be a postive integer'
    });
  }

  const sql = `
    select "price"
    from "products"
    where "productId" = $1
  `;

  const params = [productId];
  db.query(sql, params)
    .then(result => {
      const productPrice = result.rows[0];
      if (!productPrice) {
        throw res.status(400).json({
          error: 'No results found'
        });
      }
      if (!req.session.cartId) {
        const sql = `
        insert into "carts" ("cartId","createdAt")
        values(default, default)
        returning "cartId"
          `;
        return db.query(sql)
          .then(result => result.rows)
          .then(result => {
            return {
              productPrice,
              result
            };
          });
      }
      return {
        productPrice,
        cartOfPerson
      };
    })
    .then(result => {
      if (cartOfPerson !== req.session.cartId) {
        req.session.cartId = result.result[0].cartId;
      }
      const price = result.productPrice.price;
      const sql = `
      insert into "cartItems" ("cartId","productId", "price")
      values ($1, $2, $3)
      returning "cartItemId"
      `;

      const params = [cartOfPerson, productId, price];
      return db.query(sql, params)
        .then(result => {
          const cart = result;
          return cart;
        });
    })
    .then(result => {

      const sql = `
        select "c"."cartItemId",
        "c"."price",
        "p"."productId",
        "p"."image",
        "p"."name",
        "p"."shortDescription"
        from "cartItems" as "c"
        join "products" as "p" using ("productId")
        where "c"."cartItemId" = $1
        `;

      const params = [result.rows[0].cartItemId];

      db.query(sql, params)
        .then(result => {
          const cartItem = result.rows[0];
          res.status(201).json({ cartItem });
        });
    })

    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error ocurred'
      });
    });
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
