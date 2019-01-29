const _ = require('lodash')

const prod_env = process.env.prod_env || 'dev'

const base_conf = {
  NODE_ENV: '"production"',
  BASE_API: '"/api/v1"',
}

const env_conf = {
  dev: {
    TUI_WS_SERVERURL:'"ws://119.27.179.175:12010"',
    CTI_WS_SERVERURL:'"ws://119.27.179.175:9050/"',
    CTI_MONITOR_WS_SERVERURL:'"ws://119.27.179.175:9052/"',
    FILE_SERVER_URL: '"http://119.27.179.175:9800"',
    SHOW_WECHAT:true,
    SMS: {
      enable: true,
      platform: '1', // 1:网关，2：领创盛世.
      type: "4",//4大类营销短信
      sendMessageTime: 10,//通话多少秒需要发短信
      content: '"你好，谢谢支持"'
    }
  },
  master: {
    TUI_WS_SERVERURL:'"ws://52.83.140.209:8910"',
    CTI_WS_SERVERURL:'"ws://52.83.140.209:9050/"',
    CTI_MONITOR_WS_SERVERURL:'"ws://52.83.140.209:9052/"',
    FILE_SERVER_URL: '"http://52.83.140.209:9000"',
    SHOW_WECHAT:true,
    SMS: {
      enable: true,
      platform: '1', // 1:网关，2：领创盛世.
      type: "4",//4大类营销短信
      sendMessageTime: 10,//通话多少秒需要发短信
      content: '"你好，谢谢支持"'
    }
  },
  sit: {
    TUI_WS_SERVERURL:'"ws://119.27.179.175:12133"',
    CTI_WS_SERVERURL:'"ws://119.27.184.157:9050/"',
    CTI_MONITOR_WS_SERVERURL:'"ws://119.27.184.157:9052/"',
    FILE_SERVER_URL: '"http://119.27.184.90:9800"',
    SHOW_WECHAT:true,
    SMS: {
      enable: false,
      platform: '1', // 1:网关，2：领创盛世.
      type: "4",//4大类营销短信
      sendMessageTime: 10,//通话多少秒需要发短信
      content: '"你好，谢谢支持"'
    }
  },
  crmnb: {
    TUI_WS_SERVERURL:'"ws://119.27.179.175:12132"',
    CTI_WS_SERVERURL:'"ws://132.232.209.250:9050/"',
    CTI_MONITOR_WS_SERVERURL:'"ws://132.232.209.250:9052/"',
    FILE_SERVER_URL: '"http://118.24.177.4:9800"',
    SHOW_WECHAT:false,
    SMS: {
      enable: true,
      platform: '1', // 1:网关，2：领创盛世.
      type: "4",//4大类营销短信
      sendMessageTime: 10,//通话多少秒需要发短信
      content: '"【安安直贷】尊敬的客户，您已成功领取3000元额度、线上自动审核，24小时内有效 http://www.anancash.com/html_aa/regist/app.html?code=ssszzz01 退订回T"'
    }
  },
  loan: {
    TUI_WS_SERVERURL:'"ws://119.27.179.175:12268"',
    CTI_WS_SERVERURL:'"ws://132.232.209.250:9050/"',
    CTI_MONITOR_WS_SERVERURL:'"ws://132.232.209.250:9052/"',
    FILE_SERVER_URL: '"http://119.27.179.175:12270"',
    SHOW_WECHAT:false,
    SMS: {
      enable: false,
      platform: '1', // 1:网关，2：领创盛世.
      type: "4",//4大类营销短信
      sendMessageTime: 10,//通话多少秒需要发短信
      content: '"你好，谢谢支持"'
    }
  },
  test: { // jindian.
    TUI_WS_SERVERURL:'"ws://119.27.179.175:12088"',
    CTI_WS_SERVERURL:'"ws://119.27.179.175:9050/"',
    CTI_MONITOR_WS_SERVERURL:'"ws://119.27.179.175:9052/"',
    FILE_SERVER_URL: '"http://119.27.184.157:12078"',
    SHOW_WECHAT:true,
    SMS: {
      enable: false,
      platform: '1', // 1:网关，2：领创盛世.
      type: "4",//4大类营销短信
      sendMessageTime: 10,//通话多少秒需要发短信
      content: '"你好，谢谢支持"'
    }
  }
}

module.exports = _.merge(base_conf, env_conf[prod_env])
