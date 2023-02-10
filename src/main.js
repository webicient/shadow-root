/**
 * Generate custom tag.
 */
customElements.define(
    'wct-iframe',
    class extends HTMLElement {
        
        /**
         * Construct the class.
         */
        constructor() {
            super();

            const src = this?.getAttribute('src')
            // Prevent rendering if content was not fetched.
            if (!src) {
                return
            }

            // Create an iframe.
            const iframe = document.createElement('iframe')
            iframe.src = src
            iframe.width = '100%'
            iframe.height = window.innerHeight
            iframe.frameBorder = 0
            iframe.scrolling = 'no'
            iframe.allow = 'fullscreen'

            // Whenever we receive the height from iframe, update it!
            window.addEventListener('message', (message) => {
                if (message?.data?.wctIframeHeight) {
                    iframe.height = `${message.data.wctIframeHeight}`
                }
            })

            this.appendChild(iframe)
        }
    }
)

