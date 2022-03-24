if(typeof window === 'undefined'){
    global.window = {}
}

const express = require('express')
const { renderToString }  = require('react-dom/server')
const SSR = require('../dist/search-server');
const fs = require('fs')
const path = require('path')
const template = fs.readFileSync(path.join(__dirname,'../dist/search.html'),'utf-8')
const data = require('./data.json')

const server = (port)=>{
    const app = express();
    app.use(express.static('dist'));
    app.get('/search', (req,res)=>{
        const htmlstr = renderMarkup(renderToString(SSR));
        res.status(200).send(htmlstr)
    });

    app.listen(port,()=>{
        console.log('Server is running on port:',port)
    })
}

const renderMarkup  = (htmlstr) => {
    const dataStr = JSON.stringify(data)
    return template.replace('<!-- HTML_PLACEHOLDER -->',htmlstr).replace('<!-- INITAL_DATA_PLACEHOLDER -->',`<script>window.__initial_data=${dataStr}</script>`);
}

server(process.env.PORT || 3000);
