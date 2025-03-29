# maplibre-gl-logo

A customizable logo control for [MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/).

This plugin provides a customizable logo control inspired by the built-in [LogoControl](https://maplibre.org/maplibre-gl-js/docs/API/classes/LogoControl/) of MapLibre GL JS.  
It allows you to display your own logo (e.g., a company or product logo) on the map.

## Installation

```sh
npm install maplibre-gl-logo
```

## Usage

```js
import { Map } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { CustomLogoControl } from "maplibre-gl-logo";

const map = new Map({
  /* YOUR_MAP_OPTIONS */
});

map.addControl(
  new CustomLogoControl({
    logo: "YOUR_IMAGE_URL",
    href: "YOUR_SITE_URL",
  }),
);
```

## Options

| Name   | Required | Default             | Description                               |
| ------ | -------- | ------------------- | ----------------------------------------- |
| logo   | Yes      | -                   | The **src** attribute for the `<img>`.    |
| href   | Yes      | -                   | The **href** attribute for the `<a>`.     |
| width  | No       | -                   | The **width** attribute for the `<img>`.  |
| height | No       | -                   | The **height** attribute for the `<img>`. |
| alt    | No       | -                   | The **alt** attribute for the `<img>`.    |
| target | No       | "_blank"            | The **target** attribute for the `<a>`.   |
| rel    | No       | "noopener nofollow" | The **rel** attribute for the `<a>`.      |

## License

This project is licensed under the terms of the [MIT license](./LICENSE).
