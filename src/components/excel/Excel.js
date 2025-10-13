import { $ } from '../../core/dom'

export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }

  getRoot() {
    const rootElement = $.create('div')
    rootElement.classList.add('excel')
    const $root = $(rootElement)
    this.components = this.components.map((Component) => {
      const element = $.create('div', Component.className)
      const $el = $(element)  // Wrap the element in our Dom wrapper
      const component = new Component($el)
      $el.html(component.toHTML())
      $root.append($el)
      return component
    })

    return $root
  }

  render() {
    const root = this.getRoot()
    this.$el.append(root.$el)
    this.components.forEach((component) => component.init())
  }
}
