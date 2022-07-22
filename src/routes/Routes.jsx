import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Payment from '../components/payment_2'
import Product from '../pages/Product'
import Heart from "../components/heart"
import User from '../components/User/User'
import AddAddress from "../components/Address/App"
import UserAddress from "../components/User/UserAddress"

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/catalog/:slug' component={Product}/>
            <Route path='/catalog' component={Catalog}/>
            <Route path='/payment' component={Payment}/>
            <Route path='/heart' component={Heart}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/user' component={User}/>
            <Route path='/addressform' component={AddAddress}/>
            <Route path='/userAddress' component={UserAddress}/>

        </Switch>
    )
}

export default Routes
