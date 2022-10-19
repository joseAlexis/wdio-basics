const Page = require("./page");

class HoverPage extends Page {

    figures(index) { return $(`.example > div.figure:nth-child(${index})`) }

    figuresImage(index) { return this.figures(index).$('img') }

    figuresCaption(index) { return this.figures(index).$('.figcaption') }

    async hoverOnFigure(index) {
        await this.figuresImage(index).moveTo(1, 1);
    }

    getFigureCaptionText(index) {
        return this.figuresCaption(index).getText();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('hovers');
    }

}

module.exports = new HoverPage();