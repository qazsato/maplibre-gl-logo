import type { ControlPosition, IControl } from 'maplibre-gl'

type CustomLogoControlOptions = {
  logo: string
  href: string
  width?: number
  height?: number
  target?: string
  alt?: string
  rel?: string
}

export class CustomLogoControl implements IControl {
  private options: CustomLogoControlOptions
  private container: HTMLElement

  constructor(options: CustomLogoControlOptions) {
    this.options = options
    this.container = document.createElement('div')
    this.container.classList.add('maplibregl-ctrl')
  }

  getDefaultPosition(): ControlPosition {
    return 'bottom-left'
  }

  onAdd() {
    // a tag
    const anchor = document.createElement('a')
    anchor.href = this.options.href
    anchor.target = this.options.target ?? '_blank'
    anchor.rel = this.options.rel ?? 'noopener nofollow'
    anchor.style.display = 'flex'
    // img tag
    const image = document.createElement('img')
    image.src = this.options.logo
    if (this.options.width) {
      image.width = this.options.width
    }
    if (this.options.height) {
      image.height = this.options.height
    }
    if (this.options.alt) {
      image.alt = this.options.alt
      anchor.setAttribute('aria-label', this.options.alt)
    }
    anchor.appendChild(image)
    this.container.appendChild(anchor)
    return this.container
  }

  onRemove() {
    this.container.parentNode?.removeChild(this.container)
  }
}
