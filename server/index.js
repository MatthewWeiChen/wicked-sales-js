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
  res.json({});
});

app.post('/api/cart', (req, res, next) => {
  const productId = parseInt(req.body.productId, 10);
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
        res.status(400).json({
          error: 'No results found'
        });
      }
      const sql = `
      insert into "carts" ("cartId","createdAt")
      values(default, default)
      returning "cartId"
      `;
      db.query(sql)
        .then(result => {
          const cartId = result.rows;
          return {
            cartId,
            productPrice
          };
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
