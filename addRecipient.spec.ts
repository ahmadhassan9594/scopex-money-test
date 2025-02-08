import { expect } from 'chai';


describe('Add Recipient Test', () => {
    it('should add a recipient successfully', async () => {
      const addRecipientButton = await $('//android.widget.Button[@content-desc="addRecipient"]');
      await addRecipientButton.click();
  
      const recipientNameField = await $('//android.widget.EditText[@content-desc="recipientName"]');
      const recipientPhoneField = await $('//android.widget.EditText[@content-desc="recipientPhone"]');
      const addButton = await $('//android.widget.Button[@content-desc="addButton"]');
  
      await recipientNameField.setValue('John Doe');
      await recipientPhoneField.setValue('1234567890');
      await addButton.click();
  
      // Capture screenshot after adding the recipient
      await driver.saveScreenshot('./screenshots/recipient_added.png');
  
      const confirmationMessage = await $('//android.widget.TextView[@content-desc="recipientAddedMessage"]');
      const messageText = await confirmationMessage.getText();
      expect(messageText).to.equal('Recipient added successfully');
    });
  });
  