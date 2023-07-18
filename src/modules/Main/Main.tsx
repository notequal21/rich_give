import style from './Main.module.scss';
import { useMediaQuery } from 'usehooks-ts';
import bg from './assets/bg.jpg';
import bgMobile from './assets/bg-mob.jpg';
import img from './assets/rich.png';
import logo from './assets/logo.svg';

const Main = () => {
  const isMobile = useMediaQuery('(max-width:767px)');

  return (
    <main className={style.main}>
      <div className={style.main__bg}>
        <img src={isMobile ? bgMobile : bg} alt='' />
      </div>
      <div className={style.main__img}>
        <img src={img} alt='' />
      </div>
      <div className='container'>
        <div className={style.mainBody}>
          <div className={style.mainBody__logo}>
            <img src={logo} alt='' />
          </div>
          <div className={style.mainBody__title}>
            <span>ВЫИГРАЙ</span>
            <span>ПУТЕШЕСТВИЕ</span>
            <span>С ДРУЗЬЯМИ*</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
