import component from './src/main.vue'

component.install = function (Vue){
    Vue.component(component.name,component);//vur注册组件
}
export default component;