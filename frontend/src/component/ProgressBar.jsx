import React from 'react'

const ProgressBar = ({progress}) => {
  return (
    <div className="outer w-full bg-brown-container h-5 rounded-lg overflow-hidden ">
              <div className="inner h-full w-1/2 bg-brown-primary " style={{width: `${progress}%`}}></div>
            </div>
  )
}

export default ProgressBar