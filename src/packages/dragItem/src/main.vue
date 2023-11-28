<template>
  <div ref="dragItem" class="drag-item" :data-minwidth="minWidth">
    <div class="drag-item-content">
      <slot>默认信息</slot>
    </div>
    <!-- 拖拽条 -->
    <div v-if="resizeShow" class="l-resize" />
  </div>
</template>
<script>
export default {
  name: 'LDragItem',
  props: {
    // 控制拖拽条的是否显示，默认显示
    resizeShow: {
      type: Boolean,
      default: true
    },
    minWidth: {
      type: [String, Number],
      default: '100'
    }
  }
  //
}
</script>
<style scoped>
.drag-item {
  min-width: 200px;
  /* flex-shrink: 1; */
  position: relative;
}
.drag-item-content {
  width: 100%;
  height: 100%;
}
.l-resize {
  position: absolute;
  top: 0;
  right: 0;
  width: 4px;
  height: 100%;
  cursor: col-resize;
  background-color: #d6d6d6;
}
</style>
