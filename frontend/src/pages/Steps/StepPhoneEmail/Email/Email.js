import React,{useState} from 'react';
import Card from '../../../../components/shared/card/Card';
import Button from '../../../../components/shared/Button/Button';
import TextInput from '../../../../components/shared/TextInput/TextInput';
import style from '../StepPhoneEmail.module.css'
const Email = ({onNext}) => {
  const[email,setEmail]=useState('');
  return (
    <>
   <Card icon='email-emoji' title='Enter your Email id'>
    <TextInput value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <div className={style.actionButtonWrap}>
          <Button text='Next' onClick={onNext} />
          </div>
          <p className={style.bottomParagraph}>
          By entering your number, you’re agreeixng to our Terms of Service and Privacy Policy. Thanks!
          </p>
         </Card>
    </>
  )
}

export default Email