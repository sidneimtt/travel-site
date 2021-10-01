
//instalar antes npm lodash 
import throttle from 'lodash/throttle'

class RevealOnScroll {
    constructor(els, thresholdPercent) {
        this.itemsToReveal = els
        this.thresholdPercent = thresholdPercent
        this.hideInitially()
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
        this.events()
    }

    events() {
        window.addEventListener("scroll",  this.scrollThrottle)
    }

    calcCaller() {
        console.log("scroll function ran")
        this.itemsToReveal.forEach( (el) => {
            this.caculateIfScrolledTo(el)
        })
    }

    caculateIfScrolledTo(el) {
          console.log("Element was calculated") 
          let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100
          if (scrollPercent < this.thresholdPercent) {
              el.classList.add("reveal-item--is-visible")
          }
    }

    hideInitially() {
        this.itemsToReveal.forEach( (el) => el.classList.add("reveal-item"))
    }

}

export default RevealOnScroll;
