const path = require('path');//用于构造打包dist的绝对路径
const {VueLoaderPlugin} = require('vue-loader');


//glob用来遍历文件夹，来自nodejs
const glob = require('glob');
const list = {};

// entry需要的是多入口文件，所有组件的list，需要动态设置list的值
// {
//     card: './component/lib/card/index.js',
//     demo: './component/lib/demo/index.js'
// }

async function makeList(dirPath, list) {
    const files = glob.sync(`${dirPath}/**/index.js`);//获取所有组件的index文件
    // console.log(files);
    for (let file of files) {
        const component = file.split(/[/.]/)[2];
        list[component] = `./${file}`;
    }
    // console.log(list);
}

makeList('components/lib', list);

module.exports = {
    entry: list,
    mode: 'development',
    output: {
        filename: '[name].umd.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'mui',
        libraryTarget: 'umd',
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {//指定plugins处理的文件
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                    }
                ]
            }
        ]
    }
};