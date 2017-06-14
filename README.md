# vue-styletron

[![Travis](https://img.shields.io/travis/LostCrew/vue-styletron.svg)](Build)
[![David](https://img.shields.io/david/LostCrew/vue-styletron.svg)](dependencies)
[![David](https://img.shields.io/david/dev/LostCrew/vue-styletron.svg)](DevDependencies)
[![npm](https://img.shields.io/npm/l/vue-styletron.svg)](License)

> [Styletron](https://github.com/rtsao/styletron) for [Vue.js](https://github.com/vuejs/vue)

## Install

#### Add dependency

`npm install vue-styletron --save` or `yarn add vue-styletron`

#### Initialize plugin

```js
import VueStyletron from 'vue-styletron'

Vue.use(VueStyletron)
```

## Usage

#### Define `style` in data, use `v-style` in template

```js
new Vue({
  el: '#el',
  data: {
    style: {
      el: {
        color: 'white'
      }
    }
  }
  template: '<div v-style="el">White text</div>'
})

// Styletron generated style:
// .a {
//   color: white
// }

// Vue rendered template:
// <div class="a">White text</div>
```
