// Uncomment the next line if there is no authorized certificate for the MC server.
// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const wdio = require('webdriverio');
const caps = {
  deviceName: '',
  platformName: 'Android',
  app: 'Advantage Shopping',
  udid:'device', // deviceID
  automationName: 'uiautomator2',
  userName: 'username@bla.com', // your username
  password: 'password' // your password
};
const driver = wdio.remote({
  protocol: "http", // change to https if needed
  logLevel: 'verbose',
  host: "url", // your MC instance
  port: 80, // port to MC
  path: "/wd/hub",
  desiredCapabilities: caps
});

driver.init()
    .context('NATIVE_APP', () => {
      console.log('Print this if successful.')
    })
    .catch((err) => {
      const errorOriginReference = 'Refer to line 23 of https://github.com/webdriverio/webdriverio/blob/master/packages/webdriver/src/utils.js';
      console.log(`Refer to line 23 of Refer to line 23 of ${errorOriginReference} for origin of the error.`)
      console.log(err)
    })
.end()
