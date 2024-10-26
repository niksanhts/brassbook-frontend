import classnames from 'classnames';
import styles from './Button.module.css';

function Button({ children, disabled, onClick }) {
  return (
    <button className={classnames(styles.wrapper, {
      [styles.buttonDisabled]: disabled,
    })} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;