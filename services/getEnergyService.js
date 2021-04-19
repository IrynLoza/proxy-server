const { postData } = require('../utils');

/*
    Description: Service for handle response from /getEnergyService

    @params {id} string (number)
    @params {type} string
    @params {callback} function

    @return {object} modified response from GM API
*/

module.exports = (id, type, callback) => {
  const body = {
    id,
    responseType: 'JSON',
  };
  const url = 'http://gmapi.azurewebsites.net/getEnergyService';

  // postData is making http request to GM API
  postData(body, url, (error, response) => {
    // error should be checked first
    if (error) return callback(error);

    /* modify response from GM API to Smartcar API requirements
    return response to controller */
    if (type === 'fuel') {
      if (response.data.tankLevel.value === 'null') {
        return callback({ message: 'This vehicle doesn\'t have tank' });
      }
      return callback(null, { percent: response.data.tankLevel.value });
    }

    if (type === 'battery') {
      if (response.data.batteryLevel.value === 'null') {
        return callback({ message: 'This vehicle doesn\'t have battery' });
      }
      return callback(null, { percent: response.data.batteryLevel.value });
    }
  });
};
