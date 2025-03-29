# maplibre-gl-logo

## Installation

```sh
npm install maplibre-gl-logo
```

## Usage

```js
import { Map } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { CustomLogoControl } from "maplibre-gl-logo";

const map = new Map({/* YOUR_MAP_OPTION */});

map.addControl(
  new CustomLogoControl({
    logo: "YOUR_IMAGE_URL",
    href: "YOUR_SITE_URL",
  }),
);
```

## Options

| name   | required | default             | description                  |
| ------ | -------- | ------------------- | ---------------------------- |
| logo   | required |                     | `<img>` **src** attribute.   |
| href   | required |                     | `<a>` **href** attribute.    |
| width  |          |                     | `<img>` **width** attribute. |
| height |          |                     | `<img>` **hegit** attribute. |
| alt    |          |                     | `<img>` **alt** attribute.   |
| target |          | '_blank'            | `<a>` **target** attribute.  |
| ref    |          | 'noopener nofollow' | `<a>` **rel** attribute.     |

## License

This project is licensed under the terms of the [MIT license](./LICENSE).
