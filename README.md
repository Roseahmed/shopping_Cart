# shopping_Cart

# Requirement for running the project:

1. Node (latest version recommended)
2. Mongodb Database
3. Install all the dependencies for both backend and frontend

# Steps to run the backend server

1. cd to backend directory
2. npm start/ node server.js

# Steps to run the fronend 

1. cd to frontend directory
2. npm start

# Steps to run the project concurrently

1. cd to backend directory
2. npm run dev

# Note You have to insert the data in mongodb database locally to perform the cart operation as products are fetch from backend

# Steps to insert product in mongodb database locally

1. open mongodb shell by typing command mongo/mongosh
2. switch the dbs by typing command use productDb
3. insert data by typing command 
db.products.insertOne({
name:"productName",
quantiy: 2}) 
or 
db.products.insertMany([
{name:"productName",
quantity:4},
{name:"productName",
quantity: 6}]);
