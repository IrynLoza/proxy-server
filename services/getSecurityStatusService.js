const { postData } = require('../utils');

/*
    Description: Service for handle response from /getSecurityStatusService

    @params {id} string (number)
    @params {callback} function

    @return {object} modified response from GM API
*/

module.exports = (id, callback) => {
  const body = {
    id,
    responseType: 'JSON',
  };
  const url = 'http://gmapi.azurewebsites.net/getSecurityStatusService';

  // postData is making http request to GM API
  postData(body, url, (error, response) => {
    // error should be checked first
    if (error) return callback(error);

    // modify response from GM API to vehicle API requirements
    const lockedMap = {
      False: false,
      True: true,
    };

    // return response to controller
    return callback(null, response.data.doors.values
      .map(({ location, locked }) => ({
        location: location.value,
        locked: lockedMap[locked.value],
      })));
  });
};
