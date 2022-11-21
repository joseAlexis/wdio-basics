# Web Driover IO 
This projects is to cover the basics of wdio v7.

## WebDriverIO Initial Configuration
Execute the following command to start the wdio configuration process, some questions will be asked.
```bash 
npx wdio config
```

Once the configuration is done, you can run your tests with the command
```bash 
npx wdio run wdio.conf.js
```

### widio.conf.js
This file contains all the project configuration, for example the ```specs: [ ... ]``` sections specifies where the test files are located. 

## Adding Chai
We can add [ChaiJS](https://www.chaijs.com/) to the project following this steps

**Step 1**
```npm install chai chai-webdriverio --save-dev``` 

**Step 2**
In the wdio.conf.js add the following code in the BeforeTest function
```Javascript
const chai = require("chai");
const chaiWdio = require("chai-webdriverio").default;

chai.use(chaiWdio(browser));

global.assert = chai.assert;
global.expect = chai.expect;

chai.Should()
``` 

_Note:_ You can have both assertion libraries along in the project adding the following line an the begining of the previous code.
```Javascript
require('expect-webdriverio');
global.wdioExpect = global.expect;
```

### Browser Support
In order to change the browser you can change the following config in the ```wdio.config.js``` file.
```Javascript
 browserName: 'chrome',
```

## Actions 
Some action that wdio provides are:

### click
### dragAndDrop
```Javascript
$('#elementA').dragAndDrop($('#elementB'))
```
### scrollIntoView
### moveTo() 
```Javascript
// Also used for hover actions with x and y offsets.
$('#element').moveTo(1,1);
```
### sendKeys
Set a sequences of key strokes to an active element, it support chars like "Left arrow", "Back Space", etc.

### setValue
It also clears the value before.


## Waits
Some options that wdio provides are:
1. waitForDisplayed()
2. waitForEnabled()
3. waitForExist()
4. waitUntil()

Each of those options are capable to do a reverse action by specifying it between curly braces.
Also the timeout option by default is 500ms and can be modified by the previous approach.
```Javascript
$('#some-element').waitForDisplayed({ reverse: true}) //Not being displayed
$('#some-element').waitForEnabled({ reverse: true, timeout: 2000}) //not being enabled
``` 

## iframes