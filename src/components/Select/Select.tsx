import { useState } from 'react';
import style from './Select.module.scss';
import arrowSvg from './assets/arrowSvg';

interface ISelect {
  current: string;
  setCurrent: (item: string) => void;
  items: string[];
}

const Select = ({ current, setCurrent, items }: ISelect) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={style.select} onMouseLeave={() => setOpen(false)}>
      <div
        onClick={() => setOpen(!isOpen)}
        className={`${style.select__btn} ${isOpen && style.open}`}
      >
        {current}
        {arrowSvg}
      </div>
      <div className={`${style.selectList} ${isOpen && style.open}`}>
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => setCurrent(item)}
            className={style.selectList__item}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
