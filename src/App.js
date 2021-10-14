import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const mailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const telReg = /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;

const App = () => {
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [telError, setTelError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const check = (value, name) => {
    console.log(value);
    switch (name) {
      case 'password':
        setPasswordError(value.length < 6);
        setPassword(value);
        break;
      case 'tel':
        setTelError(!telReg.test(value));
        setTel(value);
        break;
      case 'email':
        setEmailError(!mailReg.test(value));
        setEmail(value);
        break;
      default:
        break;
    }
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <input className = {emailError ? 'error' : ''} name = 'email' value = {email} placeholder='Введите емаил' onChange={(event) => check(event.target.value, event.target.name)}/>
        <input className = {telError ? 'error' : ''} name = 'tel' value = {tel} placeholder='Введите телефон'onChange={(event) => check(event.target.value, event.target.name)}/>
        <input className = {passwordError ? 'error' : ''} name = 'password'  value = {password} placeholder='Введите пароль'onChange={(event) => check(event.target.value, event.target.name)}/>
      </header>
    </div>
  );
}

export default App;
