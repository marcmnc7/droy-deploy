import React, { Component } from 'react'

export default class ImageEditable extends Component {

  uploadHandler = () => {
    if(this.props.mode === 'view') return
    this.refs.imageUploader.click();
  }

  handleError = (e) => {
    e.target.src = '/img/notFound.jpg'
  }

  render () {
    const { src, changeImage, name, style } = this.props
    const dataId = this.props['data-id']
    return (
      <div style={style}>
        <input data-id={dataId} name={name} id={name} style={{ display: 'none' }} onChange={changeImage} ref="imageUploader" type="file"/>
        <img onError={this.handleError} onDoubleClick={this.uploadHandler} src={src} alt="" style={{ width: '100%', height: '100%' }}/>
      </div>
    )
  }
}
