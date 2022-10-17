const DynamicControlsPage = require("../pageobjects/dynamicControls.page");

describe('Testing dynamic controls', () => {
    it('Should disble the button', async () => {
        await DynamicControlsPage.open();

        await DynamicControlsPage.clickButton();
        await expect(DynamicControlsPage.input).toBeDisabled();
    })
})
