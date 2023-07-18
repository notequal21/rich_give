import style from './Trophy.module.scss';
import { trophyList } from './trophyList';

const Trophy = () => {
  return (
    <section className={style.trophy}>
      <div className='container'>
        <div className={style.trophy__title}>ПРИЗЫ</div>
        <div className={style.trophyBody}>
          {trophyList.map((item, index) => (
            <div key={index} className={style.trophyBody__item}>
              <div className={style.trophyBody__itemIcon}>
                <img src={item.icon} alt='' />
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
