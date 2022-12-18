import React from 'react';
import styles from './Step.module.scss';

function Step({ name, content }) {
  return (
    <div className={styles.Step}>
      <div className={styles.StepName}>{name}</div>
      <div className={styles.StepContent}>{content}</div>
    </div>
  );
}

export default Step;
