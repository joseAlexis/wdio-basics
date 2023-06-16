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

## Creating suites 
Adding the following into the ```wdio.conf.js```:
```Javascript
specs: [ ... ],
suites: {
    "suite-name": [
        './test/specs/[path_to_suite_file].js'
    ]
}
```
Where:
- The ```suite-name``` is the bane if the suite. 

And in the ```package.json```, add a command like:
```JSON
"scripts": {
    "test": "...",
    "test_suite": "wdio --suite suite-name"
}
```
Where:
- The ```test_suite``` is the name of the command we are going to refer and execute with ```npm run test_suite```.
- The ```suite-name``` is the bane if the suite.