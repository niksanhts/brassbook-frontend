import React, {useState} from 'react';
import styles from './signInForm.module.css'
import YellowButton from "../../yellowButton/YellowButton.jsx";
import {useNavigate} from "react-router-dom";

function SignInForm(props) {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const canSubmit = !data.email && !data.password

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className={styles['sign-form__fields-container']}>
        <div className={styles['sign-form__field']}>
          <label htmlFor="email">Почта</label>
          <input
            value={data.email}
            onChange={e => setData({...data, email: e.target.value})}
            name="email"
            id="email"
            placeholder="Введите вашу почту"
            className={styles['sign__input']}
            type="email"
          />
        </div>
        <div className={styles['sign-form__field']}>
          <label htmlFor="password">Пароль</label>
          <input
            value={data.password}
            onChange={e => setData({...data, password: e.target.value})}
            name="password"
            id="password"
            placeholder="Введите пароль"
            className={styles['sign__input']}
            type="password"
          />
        </div>
      </div>
      <div className={styles['sign-form__btn-container']}>
        <YellowButton type={'btn'} htmlButtonType={'submit'} additionalClass={styles['sign-page-button']} disabled={canSubmit}>Войти</YellowButton>
      </div>
    </form>
  );
}

export default SignInForm;