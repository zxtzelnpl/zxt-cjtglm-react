

import React from 'react'
import {render} from 'react-dom'
import moment from 'moment'

import Perf from 'react-addons-perf'

import {Provider} from 'react-redux'

import './static/css/public.less'
import ProductList from './components/ProductList'



if(__DEV__){
    console.info('__DEV__是'+__DEV__+'这里是测试环境')
    window.Perf = Perf
}

render(
    <div>
        <ProductList />
    </div>,
    document.getElementById('root')
)