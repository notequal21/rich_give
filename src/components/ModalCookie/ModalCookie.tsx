import { useLocalStorage, useMediaQuery } from 'usehooks-ts';
import style from './ModalCookie.module.scss';
import { useState } from 'react';

const ModalCookie = () => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const [isCookieAcceptedStorage, setIsCookieAcceptedStorage] = useLocalStorage(
    'isCookieAccepted',
    false
  );
  const [isCookieAccepted, setIsCookieAccepted] = useState(false);

  const accept = () => {
    setIsCookieAcceptedStorage(true);
    setIsCookieAccepted(true);
  };

  if (!isCookieAccepted && !isCookieAcceptedStorage) {
    return (
      <>
        <div className={style.modal}>
          <div className={style.modal__text}>
            Сайт использует cookie, что позволяет получать информацию о вас.{' '}
            {isMobile && <br />} Это нужно, чтобы улучшать сайт.{' '}
            {isMobile && <br />} Продолжая пользоваться сайтом, вы соглашаетесь
            с использованием cookie и предоставления их сторонним партнерам. Вам
            нужно принять это либо покинуть сайт
          </div>
          <div className={style.modalBtns}>
            <button onClick={accept} className={style.modalBtns__item}>
              ПРИНЯТЬ
            </button>
            <a
              href='https://rich-drinks.ru/'
              className={`${style.modalBtns__item} ${style.close}`}
            >
              ПОКИНУТЬ САЙТ
            </a>
          </div>
          <a href='/upload/docs/politics.pdf' className={style.modal__privacy}>
            Пользовательское соглашение
          </a>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default ModalCookie;
