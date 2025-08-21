import React from 'react'
import User from './User'
import UserClass from './UserClass'
const AboutUs = () => {
  return (
    <div>
      <h2>AboutUs</h2>
      <User name = {"Ugam Thakkar for function based components"} location={"Canada"}/>
      <UserClass name = {"Ugam Thakkar"} location={"Canada"}/>
      </div>
  )
}

export default AboutUs