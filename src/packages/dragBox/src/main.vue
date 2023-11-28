<template>
  <div ref="dragBox" class="drag-box">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'LDragBox',
  data() {
    return {
      resizeBox: null, // 滚动条dom
      currentBox: null, // dragItem dom
      rightBox: null, // 当前盒子下一个兄弟节点
      curLen: 0,
      startX: 0,
      otherBoxWidth: 0
    }
  },
  mounted() {
    this.setDragItemFlex()
    this.dragControllerDiv()
  },
  methods: {
    // 设置子元素宽度
    setDragItemFlex() {
      const dragBox = this.$refs.dragBox
      const childsLen = dragBox.children.length
      for (let i = 0; i < childsLen; i++) {
        const node = dragBox.children[i]
        if (!node.style.width) {
          // 如果没有定义宽度，则flex-grow为1
          node.style.flex = 1
        }
      }
    },
    // 拖拽条添加鼠标按下事件
    dragControllerDiv() {
      const resize = document.getElementsByClassName('l-resize')
      for (let i = 0; i < resize.length; i++) {
        resize[i].addEventListener('mousedown', this.onMouseDown)
      }
    },
    // 鼠标按下事件
    onMouseDown(e) {
      this.resizeBox = e.target
      this.currentBox = this.resizeBox.parentNode
      this.currentBox.parentNode.style.userSelect = 'none'
      this.rightBox = this.getNextElement(this.currentBox)
      if (!this.rightBox) return
      this.curLen = this.currentBox.clientWidth
      // 其他盒子的宽度
      this.otherBoxWidth =
        this.$refs.dragBox.clientWidth -
        this.currentBox.clientWidth -
        this.rightBox.clientWidth
      // 颜色改变提醒
      this.resizeBox.style.background = '#818181'
      this.startX = e.clientX
      document.addEventListener('mousemove', this.onMousemove)
      document.addEventListener('mouseup', this.onMouseup)
    },
    onMousemove(e) {
      const endX = e.clientX
      const moveLen = endX - this.startX
      const CurBoxLen = this.curLen + moveLen
      const rightBoxLen =
        this.$refs.dragBox.clientWidth - CurBoxLen - this.otherBoxWidth
      // 当最小宽度时，无法继续拖动
      const curBoxMin = this.currentBox.dataset.minwidth
      const rightBoxMin = this.rightBox.dataset.minwidth
      if (
        CurBoxLen <= parseInt(curBoxMin) ||
        rightBoxLen <= parseInt(rightBoxMin)
      )
        return
      this.currentBox.style.width = CurBoxLen + 'px'
      this.resizeBox.style.left = CurBoxLen
      this.rightBox.style.width = rightBoxLen + 'px'
    },
    // 鼠标抬起
    onMouseup() {
      this.resizeBox.style.background = '#d6d6d6'
      this.currentBox.parentNode.style.userSelect = 'unset'
      document.removeEventListener('mousedown', this.onMouseDown)
      document.removeEventListener('mousemove', this.onMousemove)
    },

    // 获取下一个兄弟元素的兼容函数
    getNextElement(element) {
      if (element.nextElementSibling) {
        return element.nextElementSibling
      } else {
        var next = element.nextSibling // 下一个兄弟节点
        while (next && next.nodeType !== 1) {
          // 有 并且 不是我想要的
          next = next.nextSibling
        }
        return next
      }
    }
  }
}
</script>
<style scoped>
.drag-box {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
