import React from 'react';
import Step from '../../ui/Step/Step';
import { DatePicker } from 'antd';
import styles from './SubmissionApplication.module.scss';

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

function SubmissionApplication() {
  const beginVacation = (
    <div className={styles.DatePickerBody}>
      <div className={styles.DatePickerBodyName}>Начало отпуска</div>
      <DatePicker onChange={onChange} />
    </div>
  );

  const endVacation = (
    <div className={styles.DatePickerBody}>
      <div className={styles.DatePickerBodyName}>Конец отпуска</div>
      <DatePicker onChange={onChange} />
    </div>
  );

  return (
    <div>
      <Step
        name={'подача заявления'}
        content={
          <div className={styles.VacationCreate}>
            {beginVacation}
            {endVacation}
            <div className="button"> Отправить</div>
          </div>
        }
      />
    </div>
  );
}

export default SubmissionApplication;
