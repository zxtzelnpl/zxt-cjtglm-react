import React from 'react'
import {render} from 'react-dom'
import moment from 'moment'

import Perf from 'react-addons-perf'

import {Provider} from 'react-redux'

import {CSSTransition} from 'react-transition-group'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'

import './static/css/public.less'
import Banner from './components/Banner'
import ProductList from './components/ProductList'
import ProductListHot from './components/ProductListHot'

import TeachaerBrief from './components/TeacherBrief'
import TeachaerDetail from './components/TeacherDetail'
import AverageRise from './components/Charts/AverageRise'
import AverageRise1 from './components/Charts/AverageRise1'
import AverageRise2 from './components/Charts/AverageRise2'
import AverageRise3 from './components/Charts/AverageRise3'


if (__DEV__) {
    console.info('__DEV__是' + __DEV__ + '这里是测试环境')
    window.Perf = Perf
}

let ProductPage = () => (
    <div>
        <Banner/>
        <ProductListHot/>
        <ProductList/>
    </div>
)

let TeacherPage = () => (
    <div>
        <TeachaerBrief/>
        <TeachaerDetail/>
        <AverageRise/>
    </div>
)

let APP = () => (
    <Router>
        <Route render={({ location }) => (
            <div>
                <Route exact path="/" render={() => (
                    <Redirect to="/product"/>
                )}/>

                <div>
                    <CSSTransition
                        timeout={500}
                        classNames="fade"
                    >
                        <Route
                            location={location}
                            key={location.key}
                            path="/teacher"
                            component={TeacherPage}
                        />
                    </CSSTransition>
                    <CSSTransition
                        timeout={500}
                        classNames="fade"
                    >
                        <Route
                            location={location}
                            key={location.key}
                            path="/product"
                            component={ProductPage}
                        />
                    </CSSTransition>
                </div>
            </div>
        )}/>
    </Router>
)

render(
    <APP/>,
    document.getElementById('root')
)