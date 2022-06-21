import React,{useState} from 'react';
import Card from '../../../components/shared/card/Card';
import style from './StepOtp.module.css';
import Button from "../../../components/shared/Button/Button"
import TextInput from "../../../components/shared/TextInput/TextInput"
const StepOtp = ({onNext }) => {
  const[otp,setOtp]=useState('');
  return (
    <>
      <div className={style.cardWrapper}>
        <Card title='Enter the code we just texted you' icon='lock-emoji'>
        <TextInput value={otp} onChange={(e)=>setOtp(e.target.value)}/>
        <div className={style.actionButtonWrap}>
          <Button onClick={onNext} text='Next'/>
          </div>
          <p className={style.bottomParagraph}>
          By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!
          </p>
        </Card>
        
      </div>
    </>
  )
}

export default StepOtp