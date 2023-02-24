import Products from './lib/Products.svelte'
import Counter from './lib/Counter.svelte'

const Components = {
  Products,
  Counter,
}

const createComponent = (component: any, target: string) => {
  new component({
    target: document.getElementById(target),
  })
}

export { Components, createComponent }
