import React,{useState} from 'react';
import Card from '../../../../components/shared/card/Card';
import Button from '../../../../components/shared/Button/Button';
import TextInput from '../../../../components/shared/TextInput/TextInput';
import style from '../StepPhoneEmail.module.css';
import {sendOtp} from '../../../../http/index'
const Phone = ({onNext}) => {
  const [phoneNumber,setPhoneNumber]=useState('');

    async function submit(){
      
        const res= await sendOtp({phone:phoneNumber});

        console.log(res)

          //  onNext();
       }

  return (
    <>
         <Card icon='phone' title='Enter your Phone number'>
          <TextInput value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
          <div className={style.actionButtonWrap}>
          <Button text='Next'  onClick={submit} />
          </div>
          <p className={style.bottomParagraph}>
          By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!
          </p>
         </Card>
    </>
  )
}

export default Phone