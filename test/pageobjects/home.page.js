const Page = require('./page');

class HomePage extends Page {
    get list() {
        return $('ul');
    }

    get links() {
        return this.list.$$('li');
    }

    async getPageLinks() {
        const linksText = await this.links.map(element => element.getText());
        console.log(linksText);
        return linksText;
    }

    getElementByIndex(index) {
        return this.list.$(`li:nth-child(${index})`);
    }
}

module.exports = new HomePage();