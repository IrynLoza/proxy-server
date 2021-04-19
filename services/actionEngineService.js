const { postData } = require('../utils');

/*
    Description: Service for handle response from /actionEngineService

    @params {id} string (number)
    @params {action} string
    @params {callback} function

    @return {object} modified response from GM API
*/

module.exports = (id, action, callback) => {
  const body = {
    id,
    command: `${action}_VEHICLE`,
    responseType: 'JSON',
  };
  const url = 'http://gmapi.azurewebsites.net/actionEngineService';

  // postData is making http request to GM API
  postData(body, url, (error, response) => {
    // error should be checked first
    if (error) return callback(error);

    // modify response from GM API to Smartcar API requirements
    const statusHash = { EXECUTED: 'success', FAILED: 'error' };
    // return response to controller
    return callback(null, { status: statusHash[response.actionResult.status] });
  });
};
