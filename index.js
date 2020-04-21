addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with one of the two variants returned from https://cfw-takehome.developers.workers.dev/api/variants.
 * Each variant should be returned roughly 50% of the time.
 * @param {Request} request
 */
async function handleRequest(request) {
  variants = await fetch('https://cfw-takehome.developers.workers.dev/api/variants')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    return data.variants
  })
  if (Math.random() <= 0.5) {
    return fetch(variants[0])
  }
  else {
    return fetch(variants[1])
  }
}
