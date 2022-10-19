const Page = require("./page");

class WindowsPage extends Page {

    get link() { return $('.example > a') }

    get newWindowHeader() { return $('.example > h3') }

    async openNewWindow() {
        await this.link.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('windows');
    }
}

module.exports = new WindowsPage();