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