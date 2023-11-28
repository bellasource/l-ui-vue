(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["l-ui-vue"] = factory();
	else
		root["l-ui-vue"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/packages/dragBox/src/main.vue?vue&type=template&id=5f270574&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "dragBox",
    staticClass: "drag-box"
  }, [_vm._t("default")], 2);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/packages/dragBox/src/main.vue?vue&type=script&lang=js
/* harmony default export */ var mainvue_type_script_lang_js = ({
  name: 'LDragBox',
  data() {
    return {
      resizeBox: null,
      // 滚动条dom
      currentBox: null,
      // dragItem dom
      rightBox: null,
      // 当前盒子下一个兄弟节点
      curLen: 0,
      startX: 0,
      otherBoxWidth: 0
    };
  },
  mounted() {
    this.setDragItemFlex();
    this.dragControllerDiv();
  },
  methods: {
    // 设置子元素宽度
    setDragItemFlex() {
      const dragBox = this.$refs.dragBox;
      const childsLen = dragBox.children.length;
      for (let i = 0; i < childsLen; i++) {
        const node = dragBox.children[i];
        if (!node.style.width) {
          // 如果没有定义宽度，则flex-grow为1
          node.style.flex = 1;
        }
      }
    },
    // 拖拽条添加鼠标按下事件
    dragControllerDiv() {
      const resize = document.getElementsByClassName('l-resize');
      for (let i = 0; i < resize.length; i++) {
        resize[i].addEventListener('mousedown', this.onMouseDown);
      }
    },
    // 鼠标按下事件
    onMouseDown(e) {
      this.resizeBox = e.target;
      this.currentBox = this.resizeBox.parentNode;
      this.currentBox.parentNode.style.userSelect = 'none';
      this.rightBox = this.getNextElement(this.currentBox);
      if (!this.rightBox) return;
      this.curLen = this.currentBox.clientWidth;
      // 其他盒子的宽度
      this.otherBoxWidth = this.$refs.dragBox.clientWidth - this.currentBox.clientWidth - this.rightBox.clientWidth;
      // 颜色改变提醒
      this.resizeBox.style.background = '#818181';
      this.startX = e.clientX;
      document.addEventListener('mousemove', this.onMousemove);
      document.addEventListener('mouseup', this.onMouseup);
    },
    onMousemove(e) {
      const endX = e.clientX;
      const moveLen = endX - this.startX;
      const CurBoxLen = this.curLen + moveLen;
      const rightBoxLen = this.$refs.dragBox.clientWidth - CurBoxLen - this.otherBoxWidth;
      // 当最小宽度时，无法继续拖动
      const curBoxMin = this.currentBox.dataset.minwidth;
      const rightBoxMin = this.rightBox.dataset.minwidth;
      if (CurBoxLen <= parseInt(curBoxMin) || rightBoxLen <= parseInt(rightBoxMin)) return;
      this.currentBox.style.width = CurBoxLen + 'px';
      this.resizeBox.style.left = CurBoxLen;
      this.rightBox.style.width = rightBoxLen + 'px';
    },
    // 鼠标抬起
    onMouseup() {
      this.resizeBox.style.background = '#d6d6d6';
      this.currentBox.parentNode.style.userSelect = 'unset';
      document.removeEventListener('mousedown', this.onMouseDown);
      document.removeEventListener('mousemove', this.onMousemove);
    },
    // 获取下一个兄弟元素的兼容函数
    getNextElement(element) {
      if (element.nextElementSibling) {
        return element.nextElementSibling;
      } else {
        var next = element.nextSibling; // 下一个兄弟节点
        while (next && next.nodeType !== 1) {
          // 有 并且 不是我想要的
          next = next.nextSibling;
        }
        return next;
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/packages/dragBox/src/main.vue?vue&type=script&lang=js
 /* harmony default export */ var src_mainvue_type_script_lang_js = (mainvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/packages/dragBox/src/main.vue?vue&type=style&index=0&id=5f270574&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/packages/dragBox/src/main.vue?vue&type=style&index=0&id=5f270574&prod&scoped=true&lang=css

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/packages/dragBox/src/main.vue



;


/* normalize component */

var component = normalizeComponent(
  src_mainvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "5f270574",
  null
  
)

/* harmony default export */ var main = (component.exports);
;// CONCATENATED MODULE: ./src/packages/dragBox/index.js

main.install = function (Vue) {
  Vue.component(main.name, main);
};
/* harmony default export */ var dragBox = (main);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/packages/dragItem/src/main.vue?vue&type=template&id=de60a19c&scoped=true
var mainvue_type_template_id_de60a19c_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "dragItem",
    staticClass: "drag-item",
    attrs: {
      "data-minwidth": _vm.minWidth
    }
  }, [_c('div', {
    staticClass: "drag-item-content"
  }, [_vm._t("default", function () {
    return [_vm._v("默认信息")];
  })], 2), _vm.resizeShow ? _c('div', {
    staticClass: "l-resize"
  }) : _vm._e()]);
};
var mainvue_type_template_id_de60a19c_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/packages/dragItem/src/main.vue?vue&type=script&lang=js
/* harmony default export */ var dragItem_src_mainvue_type_script_lang_js = ({
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
});
;// CONCATENATED MODULE: ./src/packages/dragItem/src/main.vue?vue&type=script&lang=js
 /* harmony default export */ var packages_dragItem_src_mainvue_type_script_lang_js = (dragItem_src_mainvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/packages/dragItem/src/main.vue?vue&type=style&index=0&id=de60a19c&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/packages/dragItem/src/main.vue?vue&type=style&index=0&id=de60a19c&prod&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/packages/dragItem/src/main.vue



;


/* normalize component */

var main_component = normalizeComponent(
  packages_dragItem_src_mainvue_type_script_lang_js,
  mainvue_type_template_id_de60a19c_scoped_true_render,
  mainvue_type_template_id_de60a19c_scoped_true_staticRenderFns,
  false,
  null,
  "de60a19c",
  null
  
)

/* harmony default export */ var src_main = (main_component.exports);
;// CONCATENATED MODULE: ./src/packages/dragItem/index.js

src_main.install = function (Vue) {
  Vue.component(src_main.name, src_main);
};
/* harmony default export */ var dragItem = (src_main);
;// CONCATENATED MODULE: ./src/packages/index.js


const components = [dragBox, dragItem];
const install = function (Vue) {
  for (let com of components) {
    Vue.component(com.name, com);
  }
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
/* harmony default export */ var src_packages = ({
  version: '1.0.0',
  install,
  DragBox: dragBox,
  DragItem: dragItem
});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_packages);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=l-ui-vue.umd.js.map