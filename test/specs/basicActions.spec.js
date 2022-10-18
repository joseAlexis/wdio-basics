const CheckboxPage = require("../pageobjects/checkboxes.page");
const DynamicControlsPage = require("../pageobjects/dynamicControls.page");
const LoginPage = require("../pageobjects/login.page");

describe('Testing dynamic controls', () => {
    it('Should enable the input', async () => {
        await DynamicControlsPage.open();

        await DynamicControlsPage.button.waitForDisplayed();
        await DynamicControlsPage.clickButton();
        await DynamicControlsPage.input.waitForEnabled({ timeout: 4000 });
        await expect(DynamicControlsPage.input).toBeEnabled();
    });

    it('Should disable the input', async () => {
        await DynamicControlsPage.button.waitForDisplayed();
        await DynamicControlsPage.clickButton();
        await DynamicControlsPage.input.waitForEnabled({ timeout: 4000, reverse: true });
        await expect(DynamicControlsPage.input).toBeDisabled();
    });

    it('Should click checkbox', async () => {
        await CheckboxPage.open();
        await CheckboxPage.clickCheckbox(1);
        await expect(CheckboxPage.checkbox(1)).toBeSelected();
    });

    it('Should uncheck checkbox', async () => {
        await CheckboxPage.clickCheckbox(3);
        await expect(CheckboxPage.checkbox(3)).not.toBeSelected({ reverse: true });
    });

    it('Should validate the data sent to the login textbox', async() => {
        const username = 'holis';
        await LoginPage.open();
        await LoginPage.setUsername(username);
        await expect(LoginPage.inputUsername).toHaveValue(username)
        // const text = await LoginPage.inputUsername.getValue();
        // console.log(text)
        // await expect(LoginPage.inputUsername.getValue()).toEqual(username);
    });
});
