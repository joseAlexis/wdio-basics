const Page = require("./page");

class iFramePage extends Page {

    get iframe() { return $('#mce_0_ifr') }
    get iframeBody() { return $('#tinymce') }

    async typeOnBody(text) {
        await this.iframeBody.waitForDisplayed();
        await this.iframeBody.clearValue();
        await this.iframeBody.click();
        await this.iframeBody.keys(text);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('iframe');
    }
}

module.exports = new iFramePage();