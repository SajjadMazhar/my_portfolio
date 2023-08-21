import React from 'react'
import {resume} from "../assets"
import Navbar from './Navbar'

const Resume = () => {
  return (
    <>
      <object data={resume} type="application/pdf" style={{height:"100vh", width:"100vw"}}></object>
    </>
  )
}

export default Resume
