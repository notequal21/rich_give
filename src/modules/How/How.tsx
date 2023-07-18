import style from './How.module.scss';
import { steps } from './steps';

const How = () => {
  return (
    <section className={style.how}>
      <div className='container'>
        <div className={style.how__title}>как участвовать</div>
        <div className={style.how__subtitle}>С 25 июля по 24 августа 2023</div>
        <div className={style.howBody}>
          {steps.map((item, index) => (
            <div className={style.howStep}>
              <div className={style.howStep__img}>
                <img src={item.img} alt='' />
              </div>
              <div className={style.howStep__info}>
                <div className={style.howStep__infoNum}>{index + 1}</div>
                <div className={style.howStep__infoText}>
                  <div className={style.howStep__infoTitle}>{item.title}</div>
                  <div
                    className={style.howStep__infoDescr}
                    dangerouslySetInnerHTML={{ __html: `${item.descr}` }}
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
