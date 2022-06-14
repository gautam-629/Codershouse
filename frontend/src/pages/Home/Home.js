import style from './Home.module.css';
import { Link ,useNavigate} from 'react-router-dom';
import Card from '../../components/shared/card/Card';
import Button from '../../components/shared/Button/Button';
export const Home = () => {
  const signInLinkStyle={
      color:'#0077ff',
      fontWeight:'bold',
      textDecoration:'none',
      marginLeft:'10px'
  }
  let navigate = useNavigate();
  function startRegister(){
    navigate('/authenticate');
  }
  return (
    <>
      <div className={style.cardWrapper}>
        <Card title="Welcome to Codershouse!" icon='logo'>
        <p className={style.text}>
            We’re working hard to get Codershouse ready for everyone! While we wrap up the finishing youches, we’re adding people gradually to make sure nothing breaks
          </p>
          <div>
            <Button onClickbtn={startRegister}  text="let's go"/>
          </div>
          <div className={style.signinWrapper}>
            <span className={style.hasInvite}>Have an invite text?</span>
        
          </div>
       
        </Card>
      </div>
    </>
  )
}
