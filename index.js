/**
 * Stewart Dulaney
 * Email: sdulaney@ucla.edu
 * LinkedIn: https://www.linkedin.com/in/stewartdulaney
 * GitHub: https://github.com/sdulaney
 * Portfolio Website: https://www.stewartdulaney.com
 * DevPost: https://devpost.com/sdulaney
 */

class ElementHandler {
  element(element) {
    if (element.tagName == 'title') {
      element.setInnerContent('Stewart Dulaney')
    }
    if (element.tagName == 'h1') {
      const id = element.getAttribute('id')
      if (id != null && id == 'title') {
        element.prepend('Stewart Dulaney - ')
      }
    }
    if (element.tagName == 'p') {
      const id = element.getAttribute('id')
      if (id != null && id == 'description') {
        element.setInnerContent('Recently I was notified that my upcoming Google Software Engineer internship role was canceled due to the current COVID-19 global crisis. I was planning to join the Chrome OS Security team this June. From the high profile Cloudflare products that I\'ve used in past projects to the low profile internal or external project I\'ve never heard of, I would truly be so excited to apply my skills and growth mindset to make a positive contribution to the team and the company this summer if given the chance. Please click the link below for additional info that could help match me to a project!')
      }
    }
    if (element.tagName == 'a') {
      const id = element.getAttribute('id')
      if (id != null && id == 'url') {
        element.setAttribute('href', 'https://www.stewartdulaney.com/skills/')
        element.setInnerContent('Check out my skills')
      }
    }
  }
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with one of the two variants returned from https://cfw-takehome.developers.workers.dev/api/variants.
 * Each variant should be returned roughly 50% of the time.
 * @param {Request} request
 */
async function handleRequest(request) {
  const variants = await fetch('https://cfw-takehome.developers.workers.dev/api/variants')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    return data.variants
  })
  let url
  if (Math.random() <= 0.5) {
    url = variants[0]
  }
  else {
    url = variants[1]
  }
  const res = await fetch(url)
  return new HTMLRewriter().on('*', new ElementHandler()).transform(res)
}
