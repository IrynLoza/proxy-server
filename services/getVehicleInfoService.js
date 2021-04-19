const { postData } = require('../utils');

/*
    Description: Service for handle response from /getVehicleInfoService

    @params {id} string (number)
    @params {callback} function

    @return {object} modified response from GM API
*/

module.exports = (id, callback) => {
  const body = {
    id,
    responseType: 'JSON',
  };
  const url = 'http://gmapi.azurewebsites.net/getVehicleInfoService';

  // postData is making http request to GM API
  postData(body, url, (error, response) => {
    // error should be checked first
    if (error) return callback(error);

    // modify response from GM API to Smartcar API requirements
    let doors;
    if (response.data.fourDoorSedan.value) {
      doors = 4;
    } else if (response.data.twoDoorCoupe.value) {
      doors = 2;
    }

    // return response to controller
    return callback(null, {
      vin: response.data.vin.value,
      color: response.data.color.value,
      doorCount: doors,
      driveTrain: response.data.driveTrain.value,
    });
  });
};
