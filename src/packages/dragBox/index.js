import DragBox from './src/main';

DragBox.install = function(Vue) {
  Vue.component(DragBox.name, DragBox);
};

export default DragBox;
