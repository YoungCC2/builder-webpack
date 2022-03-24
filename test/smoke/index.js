const path = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf')
const Mocha = require('mocha')

const mocha = new Mocha({
    timeout: '10000ms'
})

process.chdir(path.join(__dirname,'template'));

rimraf('./dist',()=>{
    const proConfig = require('../../lib/webpack.prod');
    webpack(proConfig,(err,stats)=>{
        if(err){
            console.error(err);
            process.exit(2)
        }
        console.log("========================",)
        console.log(stats.toString({
            colors: true,
            modules: false,
            children: false
        }))
        console.log("webpack build sucess, begin run test.")
        mocha.addFile(path.join(__dirname,'html-test.js'))
        mocha.addFile(path.join(__dirname,'css-js-test.js'))
        mocha.run()
    })

})