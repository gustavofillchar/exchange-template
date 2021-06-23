import React from 'react';
import cx from "classnames"
import styles from './stepindicator.module.scss';

type StepProps = {
    step: number,
    maxSteps: number,
  }

const StepIndicator: React.FC<StepProps> = ({step, maxSteps}:StepProps) => {

  const StepTotal = [...Array(maxSteps)].map((_, i) => {
    return (
      <div key={i} className={cx(styles.stepItem, (step - 1) >= i ? styles.stepChecked : null)}/>
    )
  }
  );

  return (
    <div className={styles.container}>
    {StepTotal}
    </div>
    );
}

export default StepIndicator;