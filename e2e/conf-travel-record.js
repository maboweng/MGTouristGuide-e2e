// conf.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  specs: ['spec-travel-record.js'], //要導入的JS檔案

  capabilities: {
      'browserName': 'chrome', //使用的瀏覽器樣式

  },
  useAllAngular2AppRoots: true,
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 2000000,     //延長TimeOut的時間
    print: function() {}
  },
  };
