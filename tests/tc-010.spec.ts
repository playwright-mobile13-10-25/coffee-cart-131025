import { test, expect } from '../fixtures/fixturePage';
import { PageTab } from '../page/basePage';
import { Coffee } from '../page/emun/coffee.enum';
import { Color } from '../page/emun/color.enu';

test('TC-010 - Remove Item from Cart Using Delete Button', async ({ menuPage, cartPage }) => {
  const expectedTotal = '$75.00';
  await test.step('Precondition', async () => {
    await menuPage.addToCard({ coffeName: Coffee.CAPPUCCINO, amount: 2 });
    await menuPage.addToCard({ coffeName: Coffee.AMERICANO, amount: 1 });
    await menuPage.addToCard({ coffeName: Coffee.ESPRESSO, amount: 3 });
    expect(await menuPage.getTotalButtonText(), 'Expected to have 75 dollars in total.').toBe(
      `Total: ${expectedTotal}`
    );
  });

  await test.step('Step 1. Verify cart contains three items', async () => {
    await cartPage.selectTab(PageTab.CART);
    expect(await cartPage.getItemsCount(), 'Expect cart contains three items').toBe(3);
  });

  await test.step('Step 2. Verify initial cart total', async () => {
    expect(await cartPage.getTotalText(), 'Expected Pay button shows "Total: $75.00"').toBe(`Total: ${expectedTotal}`);
  });

  await test.step('Step 3. Locate Americano item in cart', async () => {
    expect(await cartPage.isItemAvailable(Coffee.AMERICANO), 'Expecting Americano in the cart').toBe(true);
  });

  await test.step('Step 4. Locate the "x" (delete) button for Americano', async () => {
    expect(cartPage.getRowItemXicon(Coffee.AMERICANO), 'Expecting Americano row has X button').toBeVisible();
  });

  await test.step('Step 5. Verify delete button aria-label', async () => {
    expect(
      await cartPage.getRowItemXicon(Coffee.AMERICANO).getAttribute('aria-label'),
      'Expecting Americano row X button has aria-label attribute.'
    ).toBe('Remove all Americano');
  });

  await test.step('Step 6. Hover over delete button', async () => {
    expect(
      await cartPage.getElementColor(cartPage.getRowItemXicon(Coffee.AMERICANO)),
      'Expecting button changed collor to Red.'
    ).toBe(Color.WHITE);

    await cartPage.getRowItemXicon(Coffee.AMERICANO).hover();
    expect(
      await cartPage.getElementColor(cartPage.getRowItemXicon(Coffee.AMERICANO)),
      'Expecting button changed collor to Red.'
    ).toBe(Color.RED);
  });

  await test.step('Step 7. Click the delete "x" button', async () => {
    await cartPage.getRowItemXicon(Coffee.AMERICANO).click();
  });

  await test.step('Step 8. Verify Americano is removed from cart', async () => {
    expect(
      (await cartPage.getItemsName()).every((el) => !el.includes(Coffee.AMERICANO)),
      'Expecting Americano is removed from the cart.'
    ).toBe(true);
  });

  await test.step('Step 9. Verify cart now shows only 2 items', async () => {
    expect(await cartPage.getItemsCount(), 'Expect cart contains two items').toBe(2);
  });

  await test.step('Step 10. Verify cart total updates', async () => {
    expect(await cartPage.getTotalText(), 'Expected Total amount is updated to "Total: $68.00"').toBe('Total: $68.00');
  });

  await test.step('Step 11. Locate delete button for Cappuccino', async () => {
    expect(await cartPage.isItemAvailable(Coffee.CAPPUCCINO), 'Expecting Cappuccino in the cart').toBe(true);
  });

  await test.step('Step 12. Click delete button for Cappuccino', async () => {
    await cartPage.getRowItemXicon(Coffee.CAPPUCCINO).click();
  });

  await test.step('Step 13. Verify only Espresso remains', async () => {
    expect(await cartPage.getItemsCount(), 'Expect cart contains only one item').toBe(1);
    expect(await cartPage.isItemAvailable(Coffee.ESPRESSO), 'Expecting only Espresso left in the cart').toBe(true);
  });

  await test.step('Step 14. Verify cart total updates', async () => {
    expect(await cartPage.getTotalText(), 'Expected Total amount is updated to "Total: $30.00"').toBe('Total: $30.00');
  });
});
