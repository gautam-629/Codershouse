import React, { useState } from 'react';
import style from './StepPhoneEmail.module.css'
import Phone from './Phone/Phone';
import Email from './Email/Email';
const StepPhoneEmail = () => {
  const phoneEmailMap = {
    phone: Phone,
    email: Email
  }
  const [type, setType] = useState('phone');
  const Component = phoneEmailMap[type];
  return (
    <>
      <div className={style.cardWrapper}>
        <div>
          <div className={style.buttonWrap}>
            <button className={`${style.tabButton} ${type==='phone'?style.active:''}`} onClick={() => { setType('phone') }}>
              <img src="/images/phone-white.png" alt="" />
            </button>
            <button className={`${style.tabButton} ${type==='email'?style.active:''}`} onClick={() => { setType('email') }}>
              <img src="/images/mail-white.png" alt="" />
            </button>
          </div>
             <Component />
        </div>
      </div>
    
    </>
  )
}

export default StepPhoneEmail;