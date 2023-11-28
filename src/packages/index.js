import DragBox from './dragBox/index' 
import DragItem from './dragItem/index' 

const components = [
  DragBox,
  DragItem
]

const install = function(Vue) {
  for(let com of components) {
    Vue.component(com.name, com)
  }
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  install,
  DragBox,
  DragItem
}