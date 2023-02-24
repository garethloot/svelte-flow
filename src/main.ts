import Products from './lib/Products.svelte'
import Counter from './lib/Counter.svelte'

type TProps = {
  [key: string]: any
}

const createComponent = (component: any, target: string, props: TProps) => {
  new component({
    target: document.getElementById(target),
    props: props,
  })
}

export { Products, Counter, createComponent }
