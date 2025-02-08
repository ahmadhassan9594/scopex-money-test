import { expect } from 'chai';

describe('Login Test', () => {
  it('should log in with a registered user', async () => {
    // Ensure that the WebDriverIO context (driver) is available
    const usernameField = await $('//android.widget.EditText[@content-desc="username"]');
    const passwordField = await $('//android.widget.EditText[@content-desc="password"]');
    const loginButton = await $('//android.widget.Button[@content-desc="login"]');
    
    // Set username and password
    await usernameField.setValue('testuser');
    await passwordField.setValue('testpassword');
    
    // Click login
    await loginButton.click();

    // Capture a screenshot after login
    await driver.saveScreenshot('./screenshots/login_success.png');

    // Assert successful login
    const homePageTitle = await $('//android.widget.TextView[@content-desc="homeTitle"]');
    const titleText = await homePageTitle.getText();
    expect(titleText).to.equal('Welcome, Test User');
  });
});
