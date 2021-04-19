const express = require('express');

const {
  getVehicleBatteryById,
  getVehicleInfoServiceById,
  getSecurityStatusServiceById,
  getVehicleFuelById,
  actionEngineServiceById,
} = require('../controllers');

// create express router
const router = express.Router();

// define endpoints and registrate controllers
router.get('/vehicles/:id/battery', getVehicleBatteryById);
router.get('/vehicles/:id', getVehicleInfoServiceById);
router.get('/vehicles/:id/doors', getSecurityStatusServiceById);
router.get('/vehicles/:id/fuel', getVehicleFuelById);
router.post('/vehicles/:id/engine', actionEngineServiceById);

/* middleware function for routers, handle errors from next
single place for handling all errors */
router.use((err, req, res, next) => {
  if (err) {
    return res.status(500).send({ status: 'ERROR', message: err });
  }
  next();
});

// middleware function for routers, handle 404 status code
router.use((req, res) => res.status(404).send({ message: 'Endpoint is not found' }));

module.exports = router;
