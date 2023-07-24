import axios from 'axios';
import style from './Trophy.module.scss';
import { useEffect, useState } from 'react';

const Trophy = () => {
  const [prizes, setPrizes] = useState([]);

  useEffect(() => {
    axios
      .get(`${window.spBaseUrl}/json/main`)
      .then(function (response) {
        setPrizes(response.data.prizes);
      })
      .catch(function (error) {})
      .finally(() => {});
  }, []);

  return (
    <section id='prizes' className={style.trophy}>
      <div className='container'>
        <div className={style.trophy__title}>ПРИЗЫ</div>
        <div className={style.trophyBody}>
          {prizes.map((item: any, index) => (
            <div key={index} className={style.trophyBody__item}>
              <div className={style.trophyBody__itemIcon}>
                <img src={item.thumb} alt='' />
              </div>
              <div
                className={style.trophyBody__itemTitle}
                dangerouslySetInnerHTML={{ __html: `${item.title}` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trophy;
