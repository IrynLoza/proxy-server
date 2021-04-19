const request = require('request');

/*
    Description: divided common logic to single method, DRY practice

    @params {body} object
    @params {url} string
    @params {callback} function

    @return {object} raw response from GM API
*/

const postData = (body, url, callback) => {
  const options = {
    method: 'POST',
    url,
    headers: {
      'Content-Type': 'application/json',
      Cookie: 'ARRAffinity=ed6c7f442fb07465ef4eab0a9736758a6a0b977dd1a4547e07e6679ac943dc5f',
    },
    body: JSON.stringify(body),
  };

  console.info(`***REQUEST: ${url}***`);
  // request is popular Node.js library for http calls
  request(options, (error, response) => {
    if (error) return callback(error);
    console.info(`***RESPONSE: ${response.body}***`);
    // parse from json to object
    const responseBody = JSON.parse(response.body);
    // handle status 200
    if (responseBody.status !== '200') return callback(`Wrong status code for ${responseBody.service}`);
    return callback(null, responseBody);
  });
};

module.exports = {
  postData,
};
