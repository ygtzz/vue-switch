## vue-pageman

a vue switch component

### Install

```bash
npm install vue-switch -S

yarn add vue-switch
```

### Quickstart
```javascript
require('vue-pager/dist/vue-switch.css');

// in ES6 modules
import { switchc } from 'vue-switch';

// in CommonJS
const { switchc } = require('vue-switch');

// in Global variable
const { switchc } = VueSwitch;

Vue.component('c-switch',switchc);
```
```html
<c-switch v-model="checked" :text="text"></c-switch>
```

### Params

`props`
- `v-model`	         switch checked status          required, Boolean
- `text`	         switch text on right	        optional, String


### Preview

![switch image](./doc/switch.png)