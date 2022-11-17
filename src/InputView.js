const validation = require('./Validation');
const MissionUtils = require("@woowacourse/mission-utils");
const Const = require('./constant/message');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    try{
      let result = 0;
      MissionUtils.Console.readLine(Const.MESSAGE.BRIDGE_SIZE, (input) => {
        if (!validation.validateBridgeLength(input)) throw new Error(Const.ERROR_MESSAGE.ERROR_SIZE);
        result = input;
      });
      return result;
    }
    catch(e){
      this.readBridgeSize();
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
