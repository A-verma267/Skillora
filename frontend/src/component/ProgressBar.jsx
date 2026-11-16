import React from 'react'

const ProgressBar = ({progress}) => {
  return (
    <div className="outer w-full bg-red-100 h-5 rounded-lg overflow-hidden ">
              <div className="inner h-full w-1/2 bg-red-300 " style={{width: `${progress}%`}}></div>
            </div>
  )
}

export default ProgressBar