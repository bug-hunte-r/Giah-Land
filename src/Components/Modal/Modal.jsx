import React from 'react'
import './Modal.css'
import './mediaModal.css'

export default function Modal() {
  return (
    <div className='modal'>
      <h3 className="title-modal">عملیات با موفقیت انجام شد</h3>
      <button className="btn-close-modal">تمام</button>
    </div>
  )
}
