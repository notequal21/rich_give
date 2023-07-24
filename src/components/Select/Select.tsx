import { useState } from 'react';
import style from './Select.module.scss';
import arrowSvg from './assets/arrowSvg';

interface ISelect {
  current: string;
  setCurrent: (item: string) => void;
  items: any[];
  handle?: any;
}

const Select = ({ current, setCurrent, items, handle }: ISelect) => {
  const [isOpen, setOpen] = useState(false);

  const selectItem = (interval: any, id: any) => {
    setOpen(false);
    setCurrent(interval);
    handle(id);
  };

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
            // onClick={() => setCurrent(item.interval)}
            onClick={() => selectItem(item.interval, item.id)}
            className={style.selectList__item}
          >
            {item.interval}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
