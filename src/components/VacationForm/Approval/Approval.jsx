import React from 'react';
import Step from '../../ui/Step/Step';
import { Modal } from 'antd';
import { useState } from 'react';

function Approval() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmitAddTask = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const AddTask = (
    <div className="button" onClick={onSubmitAddTask}>
      Добавить задание
    </div>
  );
  return (
    <div>
      <Step
        name={'утверждение руководителем'}
        content={
          <div>
            <div>{AddTask}</div>
            <Modal
              title="Добавить файл на подпись"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <div>
                <p>Добавьте файл на подпись:</p>
                <input type="file" name="f"></input>
                <input type="file" name="f"></input>
                <input type="file" name="f"></input>
                <input type="file" name="f"></input>
              </div>
            </Modal>
          </div>
        }
      />
    </div>
  );
}

export default Approval;
