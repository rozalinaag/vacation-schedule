import React from 'react';
import Step from '../../ui/Step/Step';
import { Modal } from 'antd';
import { useState } from 'react';

function TeamNotification() {
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

  return (
    <div>
      <Step
        name={'Оповещение команды'}
        content={
          <div>
            <div className="button" onClick={onSubmitSend}>
              {' '}
              Отправить
            </div>
            <Modal
              title="Оповещение команды"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Оповещение команды пройдено успешно</p>
            </Modal>
          </div>
        }
      />
    </div>
  );
}

export default TeamNotification;
