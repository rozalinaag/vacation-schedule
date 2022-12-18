import React from 'react';
import Step from '../../ui/Step/Step';
import styles from './MakingApplication.module.scss';
import { UsergroupAddOutlined } from '@ant-design/icons';

export const content = (
  <div className={styles.Task}>
    <div>
      <UsergroupAddOutlined />
    </div>
    <div className="button">Задание 1</div>
  </div>
);

function MakingApplication() {
  return (
    <div>
      <Step name={'Оформление заявления'} content={content} />
    </div>
  );
}

export default MakingApplication;
