import DragItem from './src/main';

DragItem.install = function(Vue) {
  Vue.component(DragItem.name, DragItem);
};

export default DragItem;
