'use strict'

// import { hw } from './hw'
// console.log(hw())
// document.write(hw());

// import React from 'react'
// import ReactDom from 'react-dom'

// import '../../common'
// import { a }  from './tree_shaking'
// import './index.less'

const React = require('react')
require('./index.less')
// if(false){
//     a()
// }
class App extends React.Component {
    constructor(){
        super(...arguments)
        this.state = {
            Text: null
        }
    }
    
    loadComponent(){
        import('./text.js').then((Text)=>{
            this.setState({
                Text: Text
            })
        });
    }

    render(){
        const { Text } = this.state;
        // a = 1;
        return (
            <div className="app">
                　Search  

                {
                    Text ? <Text/> : null
                }
                <button onClick={()=>{
                    this.loadComponent()
                }}>
                    loadComponent
                </button>
            </div>
        )
    }
}

module.exports = <App/>