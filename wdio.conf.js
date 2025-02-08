exports.config = {
    runner: 'local',
    specs: ['./test/spec/*.ts'],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
      platformName: 'Android',
      'appium:platformVersion': '11',
      'appium:deviceName': 'emulator-5554',  // Update with your device
      'appium:app': 'path/to/your/app.apk',  // Your APK path here
      'appium:automationName': 'UiAutomator2',
    }],
    logLevel: 'info',
    reporters: ['spec', ['allure', { outputDir: 'allure-results' }]],
    framework: 'mocha',
    mochaOpts: {
      timeout: 60000,  // Adjust based on your app's loading time
    },
    before: async () => {
      await driver.reset();
    }
  };
  