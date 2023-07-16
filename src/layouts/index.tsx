import React from 'react'
import "./index.css"
import "antd/dist/antd.variable.css"

function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className='layout'>{children}</div>
  )
}

export default Layout