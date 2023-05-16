import { device, element, expect } from 'detox';
import { } from 'jest-circus';
describe('Subscription', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have info about cancel subscription', async () => {
    const info = element(by.text('Cancel anytime. Ofter terms apply.'));

    await expect(info).toBeVisible();
  });

  it('should subscribe to the premium plan', async () => {
    await element(by.id('option-premium')).tap();

    await element(by.id('input-email')).tap();
    await element(by.id('input-email')).typeText('luiz@email.com.br');

    await element(by.id('keyboard')).tap();

    await element(by.id('button-subscribe')).tap();

    // A delay function to help visualize the results
    await new Promise(r => setTimeout(r, 3000));

    await expect(element(by.id('confirmation-message'))).toBeVisible();
  });
});
