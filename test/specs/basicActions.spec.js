const HomePage = require("../pageobjects/home.page");
const CheckboxPage = require("../pageobjects/checkboxes.page");
const DynamicControlsPage = require("../pageobjects/dynamicControls.page");
const HoverPage = require("../pageobjects/hover.page");
const LoginPage = require("../pageobjects/login.page");
const KeyPresses = require("../pageobjects/keypresess.page");
const WindowsPage = require("../pageobjects/windows.page");
const iFramePage = require("../pageobjects/iframe.page");
const DragAndDrop = require('../pageobjects/dragdrop.page');

const loginData = require('../data/loginData');

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

    it('Should validate the data sent to the login textbox', async () => {
        await LoginPage.open();
        await LoginPage.setUsername(loginData.username);
        await expect(LoginPage.inputUsername).toHaveValue(loginData.username)
    });

    it('Should match the text when hover over an image', async () => {
        await HoverPage.open();
        await HoverPage.hoverOnFigure(3);
        await expect(HoverPage.figuresCaption(3)).toBeDisplayed();
        await expect(HoverPage.figuresCaption(3)).toHaveTextContaining('name: user1');
    });

    it('Should send keys', async () => {
        const key = "Backspace"
        await KeyPresses.open();
        await KeyPresses.sendKeys(key);
        await expect(KeyPresses.result).toHaveText('You entered: BACK_SPACE');
    });

    it('Should scroll to an element', async () => {
        await HomePage.open();
        await HomePage.scrollToPageFooter();
        await expect(HomePage.footer).toBeDisplayedInViewport();
    });

    it('Should open a new window', async () => {
        const newUrl = `${browser.options.baseUrl}/windows/new`;
        await WindowsPage.open();
        await WindowsPage.openNewWindow();
        await browser.switchWindow(newUrl);
        await expect(WindowsPage.newWindowHeader).toBeDisplayedInViewport();
    });

    it.skip('Should add new text to iframe', async () => {
        const text = "New text in the iframe body";

        await iFramePage.open();
        await iFramePage.iframe.waitForDisplayed();
        await browser.switchToFrame(iFramePage.iframe);
        await iFramePage.typeOnBody(text);
        await expect(iFramePage.iframeBody).toHaveValue(text);
    });

    it.skip('Should drag and drop', async () => {
        await DragAndDrop.open();
        await DragAndDrop.dragColumnAToColumnB();
        await expect(DragAndDrop.columnA).toHaveText('B');
        await expect(DragAndDrop.columnA).toHaveText('A');
    })
});
