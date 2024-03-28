import React from 'react'
import WebcamCom from './webcam'
import Spinner from './spinner'

export default function Main() {
  return (
 <div className="grid grid-cols-2 gap-4">
  <div>
     <WebcamCom/>
  </div>
  <div>
    <Spinner/>
  </div>
</div>
  )
}
