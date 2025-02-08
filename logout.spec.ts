import { expect } from 'chai';

describe('Logout Test', () => {
    it('should log out successfully', async () => {
      const menuButton = await $('//android.widget.Button[@content-desc="menu"]');
      await menuButton.click();
  
      const logoutButton = await $('//android.widget.Button[@content-desc="logout"]');
      await logoutButton.click();
  
      // Capture screenshot after logout
      await driver.saveScreenshot('./screenshots/logout_success.png');
  
      const loginPageTitle = await $('//android.widget.TextView[@content-desc="loginPageTitle"]');
      const titleText = await loginPageTitle.getText();
      expect(titleText).to.equal('Please log in');
    });
  });
  