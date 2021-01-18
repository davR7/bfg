## BFG 
BFG (Basic Front-End with Gulp) is a basic boilerplate for building simple pages with live reload (changing the code in the editor, the browser automatically updates the page). 
This boilerplate does not exclude the possibility of working with css frameworks, you can use Bootstrap or Materialize.

## Starting the BFG

1. Clone the repository

```
https://github.com/davR7/bfg.git
```
2. Installation of node dependencies

```
npm install
```
3. Start development

```
gulp dev
```
## Using Bootstrap or Materialize.

1. Copy the files to b-vendor

```
gulp buildBootstrap or gulp buildMaterialize
```

2. Import the files from the b-vendor directory into your html file

Note: If you want to remove the b-vendor files, type "gulp cleanVendor".
