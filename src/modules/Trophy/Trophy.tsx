import axios from 'axios';
import style from './Trophy.module.scss';
import { trophyList } from './trophyList';
import { useEffect, useState } from 'react';
import icon1 from './assets/prize-1.png';
import icon2 from './assets/prize-2.png';
import icon3 from './assets/prize-3.png';
import icon4 from './assets/prize-4.png';
import icon5 from './assets/prize-5.png';

const Trophy = () => {
  const [prizes, setPrizes] = useState([
    { thumb: icon1, title: 'Набор бокалов' },
    { thumb: icon2, title: 'Сертификат <br/> OZON' },
    { thumb: icon3, title: 'Стильные вещи <br/> с символикой <br/> бренда' },
    { thumb: icon4, title: 'Сертификат <br/> CUVA®' },
    { thumb: icon5, title: 'Путешествие <br/> с друзьями' },
  ]);

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
          {prizes.map((item, index) => (
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
