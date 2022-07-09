[![@nuxtjs/algolia](https://algolia.nuxtjs.org/preview.png)](https://algolia.nuxtjs.org)

# @nuxtjs/algolia

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> [Algolia](https://www.algolia.com/) module for [Nuxt](https://v3.nuxtjs.org)

- [✨ &nbsp;Release Notes](https://github.com/nuxt-community/algolia/releases)
- [📖 &nbsp;Read the documentation](https://algolia.nuxtjs.org)

## Features

- Nuxt 3 ready
- Easy integration with Algolia
- Handy composables like useAlgolia, useSearch, etc
- Support for Vue Instantsearch components
- Support for Algolia Recommend
- Support for Docsearch
- Support for Automatic Indexing
- TypeScript support

[📖 &nbsp;Read the documentation](https://algolia.nuxtjs.org)

## Preview

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/baroshem/nuxt3-algolia-stackblitz)

## Setup

```sh
yarn add @nuxtjs/algolia # yarn
npm i @nuxtjs/algolia # npm
```

## Basic usage

Firstly, you need to add `@nuxtjs/algolia` to your Nuxt config.

```javascript
// nuxt.config.js

{
    modules: [
        "@nuxtjs/algolia",
    ],
    algolia: {
        apiKey: "<YOUR_SEARCH_API_KEY>",
        applicationId: "<YOUR_APPLICATION_ID>",
    }
}
```

Then you can start using `@nuxtjs/algolia` in your setup function!

```vue
<script setup>
const { result, search } = useAlgoliaSearch("test_index"); // pass your index as param

// Client side only
onMounted(async () => {
  await search({ query: "Samsung" });
});

// Server / client side
await search({ query: "Samsung" });

</script>
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Prepare environment using `yarn run dev:prepare` or `npm run yarn run dev:prepare`
4. Start development server using `yarn dev` or `npm run dev`

## License

[MIT License](./LICENSE)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/algolia/latest.svg
[npm-version-href]: https://npmjs.com/package/@nuxtjs/algolia
[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxtjs/algolia.svg
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/algolia
[github-actions-ci-src]: https://github.com/nuxt-modules/algolia/actions/workflows/ci.yml/badge.svg
[github-actions-ci-href]: https://github.com/nuxt-community/algolia/actions?query=workflow%3Aci
[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/algolia.svg
[codecov-href]: https://codecov.io/gh/nuxt-community/algolia
[license-src]: https://img.shields.io/npm/l/@nuxtjs/algolia.svg
[license-href]: https://npmjs.com/package/@nuxtjs/algolia
