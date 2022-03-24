const assert = require('assert')

describe('webpack.base.js test case',()=>{
    const baseConfig = require('../../lib/webpack.base')
    // console.log(baseConfig,'baseConfig')
    it('entry',()=>{
        assert.equal(baseConfig.entry.index,'E:/workSpace/zero_webpack/build-webpack/test/smoke/template/src/index/index.js')
        assert.equal(baseConfig.entry.search,'E:/workSpace/zero_webpack/build-webpack/test/smoke/template/src/search/index.js')
    })
})