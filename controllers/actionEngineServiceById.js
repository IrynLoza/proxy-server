const { actionEngineService } = require('../services');

module.exports = (req, res, next) => {
  const { id } = req.params;
  const { action } = req.body;

  // validate input data
  if (!id) {
    return next('Id is not presented');
  }

  if (Number.isNaN((+id))) {
    return next('Id should be a number');
  }
  if (!action) {
    return next('Field action is not presented');
  }

  if (action !== 'START' && action !== 'STOP') {
    return next('Field action could be only START or STOP');
  }

  /* calling service if validation is succsesfull
  all callback functions have error as the first parameter */
  return actionEngineService(id, action, (err, response) => {
    if (err) return next(err);
    // close request and send response to client
    res.send(response);
  });
};
