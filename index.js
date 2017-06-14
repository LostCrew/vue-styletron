import { isObject, mapValues } from 'lodash'
import Vue from 'vue'
import Styletron from 'styletron'
import { injectStyle } from 'styletron-utils'

const styletron = new Styletron()

export const mixin = {
  created () {
    if (this.style) {
      if (isObject(this.style)) {
        this.$style = mapValues(this.style, style => injectStyle(styletron, style))
      } else {
        this.$style = {}
      }
    }
  }
}

export const directive = (el, { expression }, { context }) => {
  el.className += ` ${context.$style[expression]}`
}

export const install = () => {
  Vue.mixin(mixin)
  Vue.directive('style', directive)
}

export default { install }
