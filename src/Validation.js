const CONSTANT = require('./constant/constant');

/**
 * @param size: 검증하고자 하는 bridge size
 * @returns {boolean} : valid하면 true, invalid하면 false
 */
function validateBridgeLength(size){
    return !isNaN(Number(size)) && Number(size) >= CONSTANT.BRIDGE_FIRST && Number(size) <= CONSTANT.BRIDGE_END;
}

module.exports = {validateBridgeLength}
