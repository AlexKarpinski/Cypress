#  How to run tests
## 1. Download and install NodeJS.           
https://nodejs.org/en/download/

## 2. Load the project from the GitHub.       
https://github.com/AlexKarpinski/Cypress

## 3. In project go to the root and perform command: 
```
npm install
```

## 4. Run testing scripts: 

###  4.1 To run all tests in Electron
```
npx cypress run
```

###  4.2 To run all tests in Chrome: 
```
npx cypress run -b chrome
```
  #### 4.2.1 Parametres for report in the Cypress Dashboard:   
  ```
  npx cypress run --record --key 71bee1fb-3850-4ef5-af96-34296456abbf
  ```
**--record means** that transfer results to the Cypress Dashboard is on.  **--key parameter followed by value
 71bee1fb-3850-4ef5-af96-34296456abbf** is used for access to project in the Cypress Dashboard.
  #### 4.2.2 Results are loaded into the Cypress Dashboard:
  https://dashboard.cypress.io/projects/bya9vm/runs
###  4.3 To run single test use then choose a test and click on him:  
```
npx cypress open
