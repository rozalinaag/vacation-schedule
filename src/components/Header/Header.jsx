import React from 'react';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderItem}>Войти</div>
      <div className={styles.HeaderItem}>Регистрация</div>
      <div className={styles.HeaderItem}>Контакты</div>
    </div>
  );
}

export default Header;
