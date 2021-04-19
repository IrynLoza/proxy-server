// entry point for controller module
const getVehicleBatteryById = require('./getVehicleBatteryById');
const getVehicleInfoServiceById = require('./getVehicleInfoServiceById');
const getSecurityStatusServiceById = require('./getSecurityStatusServiceById');
const getVehicleFuelById = require('./getVehicleFuelById');
const actionEngineServiceById = require('./actionEngineServiceById');

module.exports = {
  getVehicleBatteryById,
  getVehicleInfoServiceById,
  getSecurityStatusServiceById,
  getVehicleFuelById,
  actionEngineServiceById,
};
