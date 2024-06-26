import Demo from './demo';
import Card from './card';
import Button from './button';

const components = {
    Demo,
    Card,
    Button
}

const install = function (Vue) {
    if (install.installed) return;//防止重复注册
    Object.keys(components).forEach(key => {
        Vue.component(components[key].name, components[key]);
    })
}

const API = {
    install,
}
export default API;