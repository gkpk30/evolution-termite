import React from 'react'
import Hero2 from '../components/Hero2'

const h1 = "Keep Pests Away... \n Permanently"
const subHeader = "Protect your house against pests 24/7 with our Home Protection Plan"
const teaser = "Our Protection Plan can relieve your residential pest control problems."

export default function ProtectYourHome() {
  return (
    <div>
        <Hero2 teaser={teaser} h1={h1} subHeader={subHeader}/>
    </div>
  )
}
