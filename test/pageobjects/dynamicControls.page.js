const Page = require('./page');

class DynamicControlsPage extends Page {

    get input() {
        return $('#input-example > input');
    }

    get button() {
        return $('#input-example > button');
    }

    get addRemoveButton() {
        return $('#checkbox-example button')
    }

    async addOrRemove() {
        await this.addRemoveButton.waitForDisplayed();
        await this.addRemoveButton.click();
    }

    async clickButton() {
        await this.button.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('dynamic_controls');
    }
}


module.exports = new DynamicControlsPage();