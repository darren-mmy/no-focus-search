// 引入该目录下所有的组件
import NoFocusSearch from "./noFocusSearch/index";

const components = [
    NoFocusSearch
]

const MyModule = {}
MyModule.install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  MyModule.install(window.Vue)
}

export default MyModule