import React from 'react'
import '../../styles/loading-error.css'

export default class Loading extends React.Component {
  render () {
    return (
      <div className='loading-container'>
        <div className='image-container'>
          <img className='image-loading' src='../img/loading.gif' alt='loading'/>
        </div>
      </div>
    )
  }
}
