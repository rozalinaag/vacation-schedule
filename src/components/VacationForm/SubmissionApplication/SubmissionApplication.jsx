import React from 'react';
import Step from '../../ui/Step/Step';
import { DatePicker } from 'antd';
import styles from './SubmissionApplication.module.scss';
import { Modal } from 'antd';
import { useState } from 'react';

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

function SubmissionApplication() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const onSubmitSend = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Step
        name={'подача заявления'}
        content={
          <div className={styles.VacationCreate}>
            <form>
              {beginVacation}
              {endVacation}
              <div className="button" onClick={onSubmitSend}>
                {' '}
                Отправить
              </div>
              <Modal
                title="Отпуск отправлен"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <p>Ваш отпуск отправлен на согласование</p>
              </Modal>
            </form>
          </div>
        }
      />
    </div>
  );
}

export default SubmissionApplication;
