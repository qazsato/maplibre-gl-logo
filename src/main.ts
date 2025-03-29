import './style.css'
import { Map, addProtocol, NavigationControl } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { Protocol } from 'pmtiles'
import { CustomLogoControl } from './maplibre-gl-logo'

const map = new Map({
  container: 'map',
  style:
    'https://api.protomaps.com/styles/v4/light/en.json?key=afde32549db516d8',
  center: [139.7538, 35.6674],
  zoom: 11,
})
const protocol = new Protocol()
addProtocol('pmtiles', protocol.tile)

map.addControl(new NavigationControl())
map.addControl(
  new CustomLogoControl({
    logo: 'https://github.githubassets.com/favicons/favicon.svg',
    href: 'https://github.com/',
    width: 32,
    height: 32,
    target: '',
  }),
)
