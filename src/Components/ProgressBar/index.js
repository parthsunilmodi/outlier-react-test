import React from 'react'
import './ProgressBar.scss'

const ProgressBar = ({ left, width, bgColor, parentClassName }) => {
  return (
    <div className={`progress-wrapper ${parentClassName || ''}`}>
      <div className='top-progress__minibar'>
        <div
          className='progress-wrapper__minibar__miniBarProgress'
          style={{ left: left || '0%', width: width || '0}%', backgroundColor: bgColor }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
