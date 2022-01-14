const express = require("express");
// const logger = require("../utils/logger");

var apiConnection = require('../utils/bridgeapi.ts');


/**
 * fetchAccounts
 * @method get
 * @param  {Request} request The express request object.
 * @param  {Response} response The express response object.
 *
 **/
async function fetchAccounts(request: any, response: any) {
  try {
    let account = await apiConnection.adapter.get('/accounts');
    let result = account;
    console.log("data : ", result)
    return result;
  } catch (error) {
    logger.error(`${error.message}, stack trace - ${error.stack}`);
    return response.status(400).json(error);
  }
}
exports.fetchAccounts = fetchAccounts;
