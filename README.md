## vue-switch

a vue switch component

### Install

```bash
npm install vue-switchc -S

yarn add vue-switchc
```

### Quickstart
```javascript
require('vue-switchc/dist/vue-switch.css');

// in ES6 modules
import { switchc } from 'vue-switchc';

// in CommonJS
const { switchc } = require('vue-switchc');

// in Global variable
const { switchc } = VueSwitch;

Vue.component('c-switch',switchc);
```
```html
<c-switch v-model="checked" :text="text"></c-switch>
```

### Props
Parameter | Type | required | Default | Description
--------- | ---- | -------- | ------|-----------
value | `boolean`| required | false | switch checked status, use width v-model
text    | `string` | optional |       | switch text on right
width   | `number`| optional | 60 |  switch width
height  | `number`| optional | 30 |  switch height
active-color |`string`| optional | '#0275d8' | switch checked color

### Preview

![switch image](./doc/switch.png)