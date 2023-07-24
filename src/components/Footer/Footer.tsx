import style from './Footer.module.scss';
import { footerLinks } from './footerLinks';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const [disclaimer, setDisclaimer] = useState(
    '*Приз предоставляется в виде сертификата на путешествие номиналом 500 000 рублей. Общий срок акции с 25.07.2023 по 18.09.2023. Период совершения покупок с 25.07.2023 по 24.08.2023. Информацию об организаторе акции, правилах ее проведения, количестве призов, сроках, месте и порядке их получения см. на rich-promo-dixy.ru. В акции участвуют соки и нектары Rich в объеме 1 л., напитки сокосодержащие Rich «Fleur» (Флёр) и «Dolce» (Дольче) в объеме 0,33 л. и напитки безалкогольные сильногазированные Rich «Tonic» (Тоник) и «Bitter» (Биттер) в объеме 0,33 л. и 1 л. (все вкусы). Внешний вид товаров и призов может отличаться от их изображений в рекламных материалах. «Rich» является зарегистрированным товарным знаком. © 2023. Все права защищены.'
  );

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
