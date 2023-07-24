import axios from 'axios';
import style from './How.module.scss';
import { useEffect, useState } from 'react';

import step1Img from './assets/step-1.png';
import step2Img from './assets/step-2.png';
import step3Img from './assets/step-3.png';

const How = () => {
  const [steps, setSteps]: any = useState([
    {
      thumb: step1Img,
      title: 'АКТИВИРУЙ',
      description: 'Купон в приложении <br/> «Клуб друзей Дикси»',
    },
    {
      thumb: step2Img,
      title: 'ПОКУПАЙ',
      description: 'два напитка Rich с картой <br/> «Клуб друзей Дикси»',
    },
    { thumb: step3Img, title: 'Участвуй', description: 'в розыгрыше призов' },
  ]);
  const [period, setPeriod] = useState('С 25 июля по 24 августа 2023');

  useEffect(() => {
    axios
      .get(`${window.spBaseUrl}/json/main/`)
      .then(function (response) {
        setSteps(response.data.common.conditions);
      })
      .catch(function (error) {})
      .finally(() => {});
    axios
      .get(`${window.spBaseUrl}/json/main/`)
      .then(function (response) {
        setPeriod(response.data.common.period);
      })
      .catch(function (error) {})
      .finally(() => {});
  }, []);

  return (
    <section id='how' className={style.how}>
      <div className='container'>
        <div className={style.how__title}>как участвовать</div>
        <div className={style.how__subtitle}>{period}</div>
        <div className={style.howBody}>
          {steps.map((item: any, index: any) => (
            <div className={style.howStep}>
              <div className={style.howStep__img}>
                <img src={item.thumb} alt='' />
              </div>
              <div className={style.howStep__info}>
                <div className={style.howStep__infoNum}>{index + 1}</div>
                <div className={style.howStep__infoText}>
                  <div className={style.howStep__infoTitle}>{item.title}</div>
                  <div
                    className={style.howStep__infoDescr}
                    dangerouslySetInnerHTML={{ __html: `${item.description}` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default How;
