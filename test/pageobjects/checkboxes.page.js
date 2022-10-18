const Page = require("./page");

class CheckboxPage extends Page {
    checkbox(index) { 
        return $(`#checkboxes > input:nth-child(${index})`); 
    }

    async clickCheckbox(index) {
        await this.checkbox(index).waitForDisplayed();
        await this.checkbox(index).click();
    }

    open() {
        return super.open('checkboxes');
    }

}

module.exports = new CheckboxPage();