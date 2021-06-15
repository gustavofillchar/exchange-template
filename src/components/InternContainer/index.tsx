import React from 'react';

import style from "./interncontainer.module.scss"

type InternContainerProps = {
    children: React.ReactNode,
}

const InternContainer: React.FC<InternContainerProps> = ({children}:InternContainerProps) => {
  return (
      <div className={style.container}>
        {children}
      </div>
  );
}

export default InternContainer;