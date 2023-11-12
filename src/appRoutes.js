import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import AppDashboard from './components/appDashboard'


export default function AppRoutes() {
   
  return (
  <div>
  

  {/* <PersistentDrawerLeft/> */}
  {/* <WooCommerceProducts/> */}
  <AppDashboard/>
  </div>
  )
}
