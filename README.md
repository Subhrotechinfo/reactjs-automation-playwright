# React + Vite + Playwright + Cucumber

This is an example repository demonstrating Automation Testing in Reactjs using Playwright & Cucumber.

## Badges

[![React](https://img.shields.io/badge/Reactjs-green.svg)](https://react.dev/)

[![Vite](https://img.shields.io/badge/Vite-green.svg)](https://vite.dev/)

[![Cucumber](https://img.shields.io/badge/Cucumber.io-green.svg)](https://cucumber.io/)

[![Playwright](https://img.shields.io/badge/Playwright-green.svg)](https://playwright.dev/)

[![Allure Report](https://img.shields.io/badge/Allure-Report-green.svg)](https://allurereport.org/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

[![Open Source](https://img.shields.io/badge/Open_Source-Contribution-green.svg)](https://opensource.com/)

[![Behavior Driven Development](https://img.shields.io/badge/Behaviour_Driven-Development-green.svg)](https://cucumber.io/docs/bdd/)

## Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:

This project requires Node.js (18 and higher) and NPM.

[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
10.9.0
v20.17.0
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Installation

**BEFORE YOU INSTALL:** Please read the **prerequisites**

## Run Locally

Clone the project

```bash
  git clone https://github.com/Subhrotechinfo/reactjs-automation-playwright.git
```

Go to the project directory

```bash
  $ cd reactjs-automation-playwright
```

To install and set up the repository, run:

```bash

$ cd automation
$ npm install

$ cd react-demo
$ npm install
```

## Usage

### Serving the React App

```sh
$ npm run dev
```

The react app should by default open up in `http://localhost:5173/` in the browser.

### Running the Automation Tests

```sh
$ npx cucumber-js or $ npx cucumber-js test
```

### Running the Automation Test Cases

```sh
$ npx playwright test
```

## Generating Allure Report

To generate allure report, run the following command

```bash

  allure serve allure-results
```

## Viewing Allure Report

To view allure report, chech the terminal if the bowser does not open up automatically. allure reports are generally stored inside `allure-results` folder.

```bash
  http://127.0.0.1:dynamic-port-number
```

## Viewing Cucumber Report

To view cucumber report, once we run `npx cucumber-js` this should generate the `cucumber-report.html` file in the root directory of the `automation` folder.
Try opening the `cucumber-report.html` in the browser.

### Running the API Testing

- Run the Backend Server

```sh
$ npm run dev
```

- Run the Frontend Repo

```sh
$ npm run dev
```

- Run the API test cases either in the terminal or by using the UI.

```sh
$ npx playwright test --ui or $ npx playwright test
```

## Documentation

- The automation `folder` should consist of two folders `features` and `steps` folder.
- `Features` folder should consist of all the feature file.
- `Steps` folder should consist of the `steps` file for each `feature` file we create in the `feature` folder.

### Step 1

- Create new feature file as per JIRA ticket feature file. Words should match exactly as that of the feature file in the JIRA ticket.
- Naming convention `featureName.feature`

### Step 2

- Create steps file for each feature file.
- Naming convention `featureName.step.js`

### Step 3

- Write `API test` cases using `playwright`.
- There are 2 `folders` inside the automation `folder` `api-testing` & `ui-test`.

### Step 4

- To write `API test cases` write inside `api-testing` .
- To write `API Test cases with UI` write the test cases inside `ui-test`.

`Note: Your Projects may have different structure.`

## Authors

:relaxed:
[Subhro Chatterjee](https://github.com/Subhrotechinfo/) :pray:

## License

[MIT License | 2025 | Subhro Chatterjee](https://choosealicense.com/licenses/mit/)
