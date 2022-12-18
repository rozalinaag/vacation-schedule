import React from 'react';
import Step from '../../ui/Step/Step';

function Approval() {
  const AddTask = <div className="button">Добавить задание</div>;
  return (
    <div>
      <Step name={'утверждение руководителем'} content={AddTask} />
    </div>
  );
}

export default Approval;
