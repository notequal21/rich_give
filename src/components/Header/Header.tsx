import { useMediaQuery } from 'usehooks-ts';
import style from './Header.module.scss';
import { links } from './links';
import logoSvg from './assets/logo.svg';
import { useState } from 'react';

const Header = () => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className={style.header}>
      <div className='container'>
        <div className={style.headerBody}>
          {isMobile && (
            <>
              <div
                onClick={() => setMenuOpen(!isMenuOpen)}
                className={`${style.headerBody__burger} ${
                  isMenuOpen && style.active
                }`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={style.headerBody__logo}>
                <img src={logoSvg} alt='' />
              </div>
            </>
          )}

          <div className={`${style.headerMenu} ${isMenuOpen && style.active}`}>
            {links.map((item, index) => (
              <div key={index} className={style.headerMenu__item}>
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
