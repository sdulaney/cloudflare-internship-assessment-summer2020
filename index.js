addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
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
  return fetch(variants[0])
}
