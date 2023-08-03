import axios from 'axios';
import style from './How.module.scss';
import { useEffect, useState } from 'react';

const How = () => {
  const [steps, setSteps]: any = useState([]);
  const [period, setPeriod] = useState('');

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
            <div key={index} className={style.howStep}>
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
