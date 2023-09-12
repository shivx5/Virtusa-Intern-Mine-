import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
// import Auth from './Auth'

export default function Protect(props) {
  return props.handleExecute ? <Outlet/> :<Navigate to='/'/>
}
