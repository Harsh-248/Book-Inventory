const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require("dotenv").config();
const url = process.env.MONGO_URL
const client = new MongoClient(url, {

  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
module.exports = client;
