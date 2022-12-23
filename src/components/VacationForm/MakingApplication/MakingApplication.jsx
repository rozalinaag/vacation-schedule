import React from 'react';
import Step from '../../ui/Step/Step';
import styles from './MakingApplication.module.scss';
import { UsergroupAddOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { useState } from 'react';

export const content = (
  <div className={styles.Task}>
    <div>
      <UsergroupAddOutlined />
    </div>
    <div className="button">Задание 1</div>
  </div>
);

function MakingApplication() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmitSend = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const content = (
    <div className={styles.Task}>
      <div>
        <UsergroupAddOutlined />
      </div>
      <div className="button" onClick={onSubmitSend}>
        Задание 1
      </div>
    </div>
  );

  return (
    <div>
      <Step
        name={'Оформление заявления'}
        content={
          <div>
            <div>{content}</div>
            <Modal
              title="Ваш отпуск оформлен"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <div>
                <p>Ваш отпуск оформлен на даты 21.09.22-29.09.22</p>
                <div className={styles.Picture}></div>
              </div>
            </Modal>
          </div>
        }
      />
    </div>
  );
}

export default MakingApplication;
