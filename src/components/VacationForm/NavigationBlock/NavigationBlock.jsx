import React from 'react';
import styles from './NavigationBlock.module.scss';
import { SettingOutlined } from '@ant-design/icons';
function NavigationBlock() {
  return (
    <div className={styles.Navigation}>
      <div className={styles.Add + ' ' + 'button' + ' text'}> Добавить </div>
      <div className={styles.Add + ' ' + 'button' + ' text'}> В работе </div>
      <div className={styles.Add + ' ' + 'button' + ' text'}>
        {' '}
        Уход в отпуск{' '}
      </div>
      <div className={styles.Add + ' ' + 'button' + ' text'}>
        <SettingOutlined />
      </div>
      <div className={styles.Add + ' ' + 'button' + ' text'}>
        {' '}
        Обратная связь{' '}
      </div>
    </div>
  );
}

export default NavigationBlock;
