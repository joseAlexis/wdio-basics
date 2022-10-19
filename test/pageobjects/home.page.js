const Page = require('./page');

class HomePage extends Page {
    get list() { return $('ul') }

    get links() { return this.list.$$('li') }

    get footer() { return $('#page-footer') }

    async scrollToPageFooter() {
        await this.footer.scrollIntoView();
        // await this.footer.waitForBeDisplayed();
    }

    async getPageLinks() {
        const linksText = await this.links.map(element => element.getText());
        console.log(linksText);
        return linksText;
    }

    getElementByIndex(index) {
        return this.list.$(`li:nth-child(${index})`);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('#');
    }
}

module.exports = new HomePage();