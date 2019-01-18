const fs = require('fs');
const path = require('path');
const join = require('path').join;
const src =  path.resolve(__dirname, 'src');

let jsonFiles = [];
function findJsonFile(path, dir){
    let files = fs.readdirSync(path);
    
    files.forEach(function (item, index) {
        let fileAgg = {
            dir: '',
            file: ''
        };
        let fPath = join(path, item);
        let stat = fs.statSync(fPath);
        if (stat.isFile() === true) {
            if(/\.ts$/.test(item)) {  
                console.log(item)              
                fileAgg.dir = dir;
                fileAgg.file = item;
                jsonFiles.push(fileAgg);
            }
        } else if(stat.isDirectory() === true) {
            findJsonFile(fPath, item);
        }
    });
}
findJsonFile(src, '');
// 输入
let entry = {};
let htmlWebpack = []
jsonFiles.forEach(el => {
    let file = el.file;
    let fileName = file.replace(/\.ts$/, "");
    let key = el.dir + '/' + fileName;
    entry[key] = './src/' + el.dir + '/' + file;
    htmlWebpack.push({
        title: file,
        template: './index.html',
        filename: el.dir+'/'+fileName+'.html',
        chunks: [key]
    })
})
module.exports = {
    entry,
    htmlWebpack
}

