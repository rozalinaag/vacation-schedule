import React from 'react';
import { content } from '../MakingApplication/MakingApplication';
import Step from '../../ui/Step/Step';

function TeamNotification() {
  return (
    <div>
      <Step name={'Оповещение команды'} content={content} />
    </div>
  );
}

export default TeamNotification;
