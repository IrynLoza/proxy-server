/* eslint-disable no-undef */
const assert = require('assert');
const actionEngineService = require('../services/actionEngineService');
const getEnergyService = require('../services/getEnergyService');
const getSecurityStatusService = require('../services/getSecurityStatusService');
const getVehicleInfoService = require('../services/getVehicleInfoService');

// describe for description and fancy output
describe('Services', () => {
  describe('actionEngineService', () => {
    // test
    it('should successfully return modified response from GM API', (done) => {
      const id = '1234';
      const action = 'START';

      actionEngineService(id, action, (err, res) => {
        const result = 'status' in res;
        const staus = res.status === 'success' || res.status === 'error';
        assert.equal(result, true);
        assert.equal(staus, true);
        // finish test
        done();
      });
    });
  });
  describe('getEnergyService', () => {
    it('should successfully return modified response for fuel if id is correct', (done) => {
      const id = '1234';
      const type = 'fuel';

      getEnergyService(id, type, (err, res) => {
        const result = 'percent' in res;
        const percent = typeof +res.percent;
        assert.equal(result, true);
        assert.equal(percent, 'number');
        done();
      });
    });
    it('should successfully return error for fuel if id is not correct', (done) => {
      const id = '1235';
      const type = 'fuel';

      getEnergyService(id, type, (err) => {
        assert.equal(err.message, "This vehicle doesn't have tank");
        done();
      });
    });
    it('should successfully return error for battery if id is not correct', (done) => {
      const id = '1234';
      const type = 'battery';

      getEnergyService(id, type, (err) => {
        assert.equal(err.message, "This vehicle doesn't have battery");
        done();
      });
    });
  });
  describe('getSecurityStatusService', () => {
    it('should return modified response from GM API', (done) => {
      const id = '1234';
      getSecurityStatusService(id, (err, res) => {
        res.forEach((el) => {
          const location = 'location' in el;
          const locked = 'locked' in el;
          const lockedType = typeof el.locked;

          assert.equal(location, true);
          assert.equal(locked, true);
          assert.equal(lockedType, 'boolean');
        });
        done();
      });
    });
  });
  describe('getVehicleInfoService', () => {
    it('should return modified response from GM API', (done) => {
      const id = '1234';
      getVehicleInfoService(id, (err, res) => {
        const vin = 'vin' in res;
        const color = 'color' in res;
        const doorCount = 'doorCount' in res;
        const driveTrain = 'driveTrain' in res;

        assert.equal(vin, true);
        assert.equal(color, true);
        assert.equal(doorCount, true);
        assert.equal(driveTrain, true);
        done();
      });
    });
  });
});
