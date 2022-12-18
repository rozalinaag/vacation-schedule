import React from 'react';
import SubmissionApplication from './SubmissionApplication/SubmissionApplication';
import styles from './VacationForm.module.scss';
import NavigationBlock from './NavigationBlock/NavigationBlock';
import Approval from './Approval/Approval';
import MakingApplication from './MakingApplication/MakingApplication';
import TeamNotification from './TeamNotification/TeamNotification';

function VacationForm() {
  return (
    <div>
      <div>
        <div className={styles.Title + ' ' + 'title'}>График отпусков</div>
        <NavigationBlock />
      </div>
      <div className={styles.VacationBody}>
        <div></div>
        <div className={styles.Steps}>
          <SubmissionApplication />
          <Approval />
          <MakingApplication />
          <TeamNotification />
        </div>
      </div>
    </div>
  );
}

export default VacationForm;
