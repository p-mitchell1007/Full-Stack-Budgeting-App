const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transaction");

//INDEX
transactions.get("/", (req, res) => {
    res.json(transactionsArray);
  });
  
module.exports = transactions;

// SHOW
transactions.get("/:arrayIndex", (req, res) => {
    if (transactionsArray[req.params.arrayIndex]) {
      res.json(transactionsArray[req.params.arrayIndex]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });
  
  // CREATE
  transactions.post("/", (req, res) => {
    transactionsArray.push(req.body);
    res.json(transactionsArray[transactionsArray.length - 1]);
  });
  
  // EXPORT
  module.exports = transactions

  // DELETE
transactions.delete("/:indexArray", (req, res) => {
    if (transactionsArray[req.params.indexArray]) {
      const deletedTransaction = transactionsArray.splice(req.params.indexArray, 1);
      res.status(200).json(deletedTransaction);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });
  // UPDATE
  transactions.put("/:arrayIndex", (req, res) => {
    if (transactionsArray[req.params.arrayIndex]) {
      Object.assign(logsArray[req.params.arrayIndex], req.body);
      res.status(200).json(transactionsArray[req.params.arrayIndex]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });