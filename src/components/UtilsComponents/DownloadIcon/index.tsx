import React from 'react';

import style from "./donwloadicon.module.scss"

type DownloadProps = {
  onPress: () => void
}

const DownloadIcon: React.FC<DownloadProps> = ({onPress}:DownloadProps) => {
  return (
      <button className={style.icon} onClick={onPress}/>
  );
}

export default DownloadIcon;