import style from './Footer.module.scss';
import { footerLinks } from './footerLinks';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const [disclaimer, setDisclaimer] = useState('');

  useEffect(() => {
    axios.get(`${window.spBaseUrl}/json/main/`).then((response) => {
      setDisclaimer(response.data.common.disclaimer);
    });
  }, []);

  const toForm = (e: any) => {
    e.preventDefault();
    navigate('/faq');

    setTimeout(() => {
      const section = document.querySelector('#form');
      section?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  return (
    <footer className={style.footer}>
      <div className='container'>
        <div className={style.footerLinks}>
          {footerLinks.map((item: any, index) => {
            if (item.href.split('').some((item: any) => item === '#')) {
              return (
                <a href='' className={style.footerLinks__item} onClick={toForm}>
                  {item.name}
                </a>
              );
            } else {
              return (
                <a
                  href={item.href}
                  key={index}
                  className={style.footerLinks__item}
                >
                  {item.name}
                </a>
              );
            }
          })}
        </div>
        <div
          className={style.footer__text}
          dangerouslySetInnerHTML={{ __html: `${disclaimer}` }}
        ></div>
      </div>
    </footer>
  );
};

export default Footer;
