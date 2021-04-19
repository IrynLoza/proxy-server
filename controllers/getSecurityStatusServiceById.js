const { getSecurityStatusService } = require('../services');

module.exports = (req, res, next) => {
  const { id } = req.params;

  // validate input data
  if (!id) {
    return next('Id is not presented');
  }

  if (Number.isNaN((+id))) {
    return next('Id should be a number');
  }

  /* calling service if validation is succsesfull
  all callback functions have error as the first parameter */
  return getSecurityStatusService(id, (err, response) => {
    if (err) return next(err);

    // close request, send response to client
    res.send(response);
  });
};
