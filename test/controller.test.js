/* eslint-disable no-undef */
const proxyquire = require('proxyquire');
const assert = require('assert');

/* Replaces the actual behavior of a module
Test controller data validation and module logic, not a service */
const stubs = {
  '../services': {
    getEnergyService: () => true,
    actionEngineService: () => true,
    getSecurityStatusService: () => true,
    getVehicleInfoService: () => true,
  },
};

/* Isolate controller from all dependencies with proxyquire
Test controller data validation and module logic, not a service */
const getVehicleFuelById = proxyquire('../controllers/getVehicleFuelById.js', stubs);
const getVehicleBatteryById = proxyquire('../controllers/getVehicleBatteryById.js', stubs);
const actionEngineServiceById = proxyquire('../controllers/actionEngineServiceById.js', stubs);
const getSecurityStatusServiceById = proxyquire('../controllers/getSecurityStatusServiceById.js', stubs);
const getVehicleInfoServiceById = proxyquire('../controllers/getVehicleInfoServiceById.js', stubs);

// describe for description and fancy output
describe('Controllers', () => {
  describe('getVehicleFuelById', () => {
    // test
    it('should return true if id is presented', () => {
      const req = {
        params: {
          id: '5',
        },
      };
      const result = getVehicleFuelById(req, {}, () => { });
      // check if test output equal of stub function execution result
      assert.equal(result, true);
    });
    it('should return error if id is not presented', () => {
      const req = {
        params: {
          id: undefined,
        },
      };
      const result = getVehicleFuelById(req, {}, (err) => {
        assert.equal(err, 'Id is not presented');
      });
      assert.equal(result, undefined);
    });
    it('should return error if id is not integer', () => {
      const req = {
        params: {
          id: 'text',
        },
      };
      const result = getVehicleFuelById(req, {}, (err) => {
        assert.equal(err, 'Id should be a number');
      });
      assert.equal(result, undefined);
    });
  });
  describe('getVehicleBatteryById', () => {
    it('should return true if id is presented', () => {
      const req = {
        params: {
          id: '2',
        },
      };
      const result = getVehicleBatteryById(req, {}, () => {});
      assert.equal(result, true);
    });
    it('should return error if id is not presented', () => {
      const req = {
        params: {
          id: undefined,
        },
      };

      const result = getVehicleBatteryById(req, {}, (error) => {
        assert.equal(error, 'Id is not presented');
      });
      assert.equal(result, undefined);
    });
    it('should return error if id is not integer', () => {
      const req = {
        params: {
          id: 'text',
        },
      };
      const result = getVehicleBatteryById(req, {}, (error) => {
        assert.equal(error, 'Id should be a number');
      });
      assert.equal(result, undefined);
    });
  });
  describe('actionEngineService', () => {
    it('should return true if id and action are presented', () => {
      const req = {
        params: {
          id: '4',
        },
        body: {
          action: 'START',
        },
      };
      const result = actionEngineServiceById(req, {}, () => {});
      assert.equal(result, true);
    });
    it('should return error if id is not presented and action are presented', () => {
      const req = {
        params: {
          id: undefined,
        },
        body: {
          action: 'START',
        },
      };
      const result = actionEngineServiceById(req, {}, (error) => {
        assert.equal(error, 'Id is not presented');
      });
      assert.equal(result, undefined);
    });
    it('should return error if id is not integer and action is presented', () => {
      const req = {
        params: {
          id: 'text',
        },
        body: {
          action: 'START',
        },
      };
      const result = actionEngineServiceById(req, {}, (error) => {
        assert.equal(error, 'Id should be a number');
      });
      assert.equal(result, undefined);
    });
    it('should return error if action is not presented and id is presented', () => {
      const req = {
        params: {
          id: '5',
        },
        body: {
          action: undefined,
        },
      };
      const result = actionEngineServiceById(req, {}, (error) => {
        assert.equal(error, 'Field action is not presented');
      });
      assert.equal(result, undefined);
    });
    it('should return error if action is not equal START and STOP and id is presented', () => {
      const req = {
        params: {
          id: '5',
        },
        body: {
          action: 'text',
        },
      };
      const result = actionEngineServiceById(req, {}, (error) => {
        assert.equal(error, 'Field action could be only START or STOP');
      });
      assert.equal(result, undefined);
    });
  });
  describe('getSecurityStatusServiceById', () => {
    it('should return true if id is presented', () => {
      const req = {
        params: {
          id: '5',
        },
      };
      const result = getSecurityStatusServiceById(req, {}, () => { });
      assert.equal(result, true);
    });
    it('should return error if id is not presented', () => {
      const req = {
        params: {
          id: undefined,
        },
      };
      const result = getSecurityStatusServiceById(req, {}, (err) => {
        assert.equal(err, 'Id is not presented');
      });
      assert.equal(result, undefined);
    });
    it('should return error if id is not integer', () => {
      const req = {
        params: {
          id: 'text',
        },
      };
      const result = getSecurityStatusServiceById(req, {}, (err) => {
        assert.equal(err, 'Id should be a number');
      });
      assert.equal(result, undefined);
    });
  });
  describe('getVehicleInfoServiceById', () => {
    it('should return true if id is presented', () => {
      const req = {
        params: {
          id: '5',
        },
      };
      const result = getVehicleInfoServiceById(req, {}, () => { });
      assert.equal(result, true);
    });
    it('should return error if id is not presented', () => {
      const req = {
        params: {
          id: undefined,
        },
      };
      const result = getVehicleInfoServiceById(req, {}, (err) => {
        assert.equal(err, 'Id is not presented');
      });
      assert.equal(result, undefined);
    });
    it('should return error if id is not integer', () => {
      const req = {
        params: {
          id: 'text',
        },
      };
      const result = getVehicleInfoServiceById(req, {}, (err) => {
        assert.equal(err, 'Id should be a number');
      });
      assert.equal(result, undefined);
    });
  });
});
