# vp-ui-vue

## Project setup
```
npm install
```

### Quick Start
```js
import LUiVue from 'l-ui-vue'
import 'l-ui-vue/lib/theme-chalk/index.css'
```

```vue
<div style="width: 1200px; height: 100px; border: 1px solid #ccc">
  <l-drag-box>
    <l-drag-item style="width: 30%" :min-width="280" />
    <l-drag-item :min-width="200" />
    <l-drag-item style="width: 30%" :resize-show="false" />
  </l-drag-box>
</div>

```
