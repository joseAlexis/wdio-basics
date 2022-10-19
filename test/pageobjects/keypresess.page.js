const Page = require("./page");

class KeyPresses extends Page {

    get target () { return $('#target')}

    get result () {return $('#result')}

    async sendKeys(text) {
        await this.target.click();
        await this.target.keys(text)
    }

    /**
     * overwrite specific options to adapt it to page object
     */
     open() {
        return super.open('key_presses');
    }
}

module.exports = new KeyPresses();