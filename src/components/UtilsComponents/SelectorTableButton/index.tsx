import React,{useState} from 'react';
import cx from 'classnames';
import style from "./selectortablebutton.module.scss"

type SelectorProps = {
  
}

const SelectorTableButton: React.FC = () => {
  const [isCollapse, setIsCollapse] = useState(false)

  const handleMenu = () => {
    setIsCollapse(!isCollapse)
  }

  return (
      <div className={style.container}>
        <div onClick={handleMenu} className={style.buttonSelector}>
          <span>24h</span>
          <div className={style.icon} />
        </div>

        <div className={cx(style.modalSelector, isCollapse ? style.modalSelectorCollapsed : null)}>
          <a>Seleção</a>
          <a>Seleção</a>
          <a>Seleção</a>
          <a>Seleção</a>
        </div>

      </div>
  );
}

export default SelectorTableButton;