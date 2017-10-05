# react-billing
Billing app built with React w/ Redux

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


[![devDependency Status](https://david-dm.org/nbfontana/billing/dev-status.svg)](https://david-dm.org/nbfontana/billing?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/nbfontana/billing.svg)](https://github.com/nbfontana/billing/issues)
[![GitHub stars](https://img.shields.io/github/stars/nbfontana/billing.svg)](https://github.com/nbfontana/billing/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/nbfontana/billing/master/LICENSE)

## Installation (API)

First of all, make sure you have [Node](https://nodejs.org) and [Mongodb](https://www.mongodb.com/) installed in your machine. And don't forget to create the 'data/db' folder with is required by Mongo.

After that, you need to initiate mongodb's service:
```
mongod
```

Then, you need to go inside the '/api' folder and install all dependencies through npm:
```
npm install -d
```

Finally, start the api server:
```
npm run api
```

For more options check the 'scripts' section in package.json.

## Installation (APP)

For the app, you need to install all dependencies through npm, so, make sure you're inside the '/app' folder and run:
```
npm install -d
```

After installing all dependencies you just need run the development server:
```
npm run server
```

## License

MIT @ Neri Bez Fontana
