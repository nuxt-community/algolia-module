import { SearchClient } from 'algoliasearch/lite'
import { createNodeHttpRequester } from '@algolia/requester-node-http';
import { createBrowserXhrRequester } from '@algolia/requester-browser-xhr';
import { defineNuxtPlugin, useRuntimeConfig } from '#imports'

export default defineNuxtPlugin(async (nuxtApp) => {
  const { applicationId, apiKey, lite, recommend } = useRuntimeConfig().algolia

  // Have to import algoliasearch directly from esm.browser because algoliasearch by default provides umd.js file which causes Nuxt to throw error
  // Also, cannot use simple string interpolation due to error 'Cannot read property 'stubModule' of undefined'
  const algoliasearch = lite
    ? await import('algoliasearch/dist/algoliasearch-lite.esm.browser').then(lib => lib.default || lib)
    : await import('algoliasearch/dist/algoliasearch.esm.browser').then(lib => lib.default || lib)

  const algoliaSearchClient: SearchClient = algoliasearch(applicationId, apiKey, {
    requester: process.server ? createNodeHttpRequester() : createBrowserXhrRequester()
  })

  nuxtApp.provide('algolia', algoliaSearchClient)

  if (recommend) {
    const algoliaRecommend = await import('@algolia/recommend/dist/recommend.esm.browser').then(lib => lib.default || lib)
    nuxtApp.provide('algoliaRecommend', algoliaRecommend(applicationId, apiKey))
  }
})
