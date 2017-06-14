const Vue = require('vue')
const VueStyletron = require('./index')

beforeAll(() => {
  Vue.use(VueStyletron)
})

it('install mixin', () => {
  expect(Vue.options.created.length).toBe(1)
})

it('install directive', () => {
  expect(Vue.options.directives.style).toBeTruthy()
})

it("creates classes and store them in component's data", () => {
  const instance = {
    style: {
      test: {
        color: 'red'
      }
    }
  }

  VueStyletron.mixin.created.call(instance)
  expect(instance).toHaveProperty('$style.test')
})

it('applies classes to element', () => {
  const el = { className: 'test' }
  const bindings = { expression: 'el' }
  const vnode = { context: { $style: { el: 'class-1 class-2' } } }

  VueStyletron.directive(el, bindings, vnode)
  expect(el.className).toBe('test class-1 class-2')
})

/*
it('creates classes and applies them on a component', () => {
  const el = document.createElement('div')
  return new Vue({
    el,
    data: {
      style: {
        el: {
          color: 'red'
        }
      }
    },
    render (createElement) {
      return createElement('div', { 'v-style': 'el' })
    }
  })
    .$nextTick(function() {
      // expect(this.$el.classList.contains(cls)).toBe(true)
    })
})
*/
