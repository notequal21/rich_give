import { useMediaQuery } from 'usehooks-ts';
import style from './Header.module.scss';
import { links } from './links';
import logoSvg from './assets/logo.svg';
import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const headerRef: any = useRef(null);
  const location = useLocation();

  const handleLink = (link: string) => {
    setMenuOpen(false);

    if (link.split('/').length > 1) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      navigate(link);
    } else {
      if (location.pathname === '/faq') {
        navigate('/');

        setTimeout(() => {
          const section = document.querySelector(`${link}`);
          section?.scrollIntoView({ behavior: 'smooth' });
        }, 1);
      } else {
        const section = document.querySelector(`${link}`);
        section?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const mainSection = document.querySelector('#main-section');

    const onScroll = (e: Event) => {
      if (mainSection && headerRef) {
        if (mainSection !== null) {
          if (window.pageYOffset > mainSection?.scrollHeight) {
            setIsOpen(true);
          } else {
            setIsOpen(false);
          }
        }
      } else {
        if (window.pageYOffset > 100) {
          setIsOpen(true);
        } else {
          setIsOpen(false);
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  });

  return (
    <>
      <header
        ref={headerRef}
        className={`${style.header} ${isMenuOpen && style.open}`}
      >
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

            <div
              className={`${style.headerMenu} ${isMenuOpen && style.active}`}
            >
              {links.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleLink(item.to)}
                  className={style.headerMenu__item}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
      <header
        ref={headerRef}
        className={`${style.header} ${style.fixed} ${isOpen && style.open}  ${
          isMenuOpen && style.open
        }`}
      >
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

            <div
              className={`${style.headerMenu} ${isMenuOpen && style.active}`}
            >
              {links.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleLink(item.to)}
                  className={style.headerMenu__item}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
      {/* {!isMobile && (
        <header
          ref={headerRef}
          className={`${style.header} ${style.fixed} ${isOpen && style.open} `}
        >
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

              <div
                className={`${style.headerMenu} ${isMenuOpen && style.active}`}
              >
                {links.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleLink(item.to)}
                    className={style.headerMenu__item}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>
      )} */}
    </>
  );
};

export default Header;
