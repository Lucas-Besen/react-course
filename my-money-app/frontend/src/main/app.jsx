import '../common/templete/dependencies'
import React from 'react'

import Header from '../common/templete/header'
import SideBar from '../common/templete/sideBar'
import Footer from '../common/templete/footer'
import Routes from './routes'
export default props =>(
    <div className='wrapper'>
        <Header/>
        <SideBar/>
        <div className='content-wrapper'>
            <Routes/>
        </div>
        <Footer></Footer>
    </div>
)