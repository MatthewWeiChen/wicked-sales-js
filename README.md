# The Grind
A full stack Node.js and React shopping cart app

## Live Deployment to App
https://thegrind.mattweichen.tech/

## Technologies
* React
* Node.js
* Bootstrap 4
* PostgreSQL
* Express
* HTML5 & CSS3
* PM2
* AWS S3

## Features
* User can view the products for sale
* User can view the details of a product
* User can add an item to their cart
* User can view their cart summary
* User can place an order

## Preview
![](https://media.giphy.com/media/9P62rfa4bjzStVGOJB/giphy.gif)

## Getting Started
### System Requirements
* npm 6 or higher
* PostgreSQL 10 or highter

### Getting Started
1. This application requires the use of AWS S3, Please have an AWS Access ID, Access Key, and a Bucket name.
2. Clone the repository.
   ```
   https://github.com/MatthewWeiChen/wicked-sales-js.git
   cd wicked-sales-js
   ```
3. Install all dependencies with NPM.
   ```
   npm install
   ```
4. Create environment variables.
   1. Clone the `env.example.config` file
   2. Name the cloned file to `.env`
   3. Edit the `.env` to provide your credentials

5. Import the example database to PostreSQL located in `database/dump.sql`.
6. Run the custom express server
   ```
   npm run dev
   ```
7. Once started you can view the application by opening http://localhost:3000 in your browser.
