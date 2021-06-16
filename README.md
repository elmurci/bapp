# XRPL Grants Website

XRPL Grants provides developer grants to help fund XRP Ledger projects.

## Build Setup

``` bash
# clone repo
git clone https://github.com/xpring-eng/xrplgrants.org.git

# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build
```

## Tests

### Unit Tests

```bash
yarn test:unit
```

### e2e Tests

```bash
yarn test:e2e
```

### All Tests

```bash
yarn test:all
```

## Deploying to GitHub Pages

Use `yarn build` to build the files into the `dist` folder.

Use `yarn deploy:ghp` to push the files inside the `dist` folder to GitHub Pages, the web hosting service.

```bash
yarn build
yarn deploy:ghp
```

## GitHub Pages site

TBD
