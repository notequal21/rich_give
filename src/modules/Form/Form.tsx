import { useForm } from 'react-hook-form';
import SuccessForm from '../../components/SuccessForm/SuccessForm';
import style from './Form.module.scss';
import { checkSvg } from './assets/checkSvg';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const emailRegex = /^\S+@\S+\.\S+$/;
  const [sendAwait, setSendAwait] = useState(false);
  const [sendErr, setSendErr] = useState('');
  const [successEmail, setSuccessEmail] = useState(false);
  const [isFormSended, setIsFormSended] = useState(false);
  const [userName, setUserName] = useState('');

  const onSubmit = (data: any) => {
    setSendAwait(true);

    console.log(data.noquestion);

    axios
      .post(`${window.spBaseUrl}/api/SendQuestion`, {
        name: data.name,
        question: data.question,
        email: data.email,
        agreement: data.agree,
        notFoundQuestion: data.noquestion,
      })
      .then(function (response) {
        console.log(response);
        const isOk = response.data.result;
        if (isOk) {
          setIsFormSended(true);
          setSendErr('');
          setUserName(data.name);
        } else {
          setSendErr('Системная ошибка');
        }
      })
      .catch(function (error) {
        console.log(error);

        error.response.data.errorText
          ? setSendErr(error.response.data.errorText)
          : setSendErr(error.message);
      })
      .finally(() => {
        setSendAwait(false);
        // setIsFormWasDecline(true);
        // setIsFinalWasOpened(false);
        // setCurrentResultStorage({});
        // setSharedLinksStorage([]);
        // setStartTimeStorage('');
        // setSendErr('');
      });
  };

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (emailRegex.test(value.email)) {
        setSuccessEmail(true);
      } else {
        setSuccessEmail(false);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <>
      <section id='form' className={style.form}>
        <div className='container'>
          {!isFormSended && (
            <div className={style.formBody}>
              <div className={style.formBody__title}>
                Если вы не нашли ответ <br className={style.mobile} /> на свой
                вопрос, <br /> напишите нам:
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={style.formContent}
              >
                <label className={style.formContent__item}>
                  <span>Ваш вопрос:</span>
                  <textarea
                    {...register('question', {
                      required: true,
                    })}
                    name='question'
                  ></textarea>
                </label>
                <label className={style.formContent__item}>
                  <span>E-mail для ответа:</span>
                  <input
                    {...register('email', {
                      required: true,
                      pattern: emailRegex,
                    })}
                    type='text'
                    name='email'
                  />
                </label>
                <label className={style.formContent__item}>
                  <span>Как к Вам обращаться:</span>
                  <input
                    {...register('name', {
                      required: true,
                    })}
                    type='text'
                    name='name'
                  />
                </label>
                <div className={style.formContent__checkboxes}>
                  <label className={style.formContent__check}>
                    <input
                      type='checkbox'
                      {...register('noquestion', {
                        required: false,
                      })}
                    />
                    <span>{checkSvg}</span>{' '}
                    <div className={style.check__text}>
                      Ответа на мой вопрос нет в списке выше
                    </div>
                  </label>
                  <label className={style.formContent__check}>
                    <input
                      {...register('agree', {
                        required: false,
                      })}
                      type='checkbox'
                    />
                    <span>{checkSvg}</span>
                    <div className={style.check__text}>
                      Я соглашаюсь с{' '}
                      <a href='/upload/docs/politics.pdf'>
                        {' '}
                        политикой конфиденциальности
                      </a>{' '}
                      и{' '}
                      <a href='/upload/docs/rules.pdf'>
                        условиями <br /> обработки персональных данных
                      </a>
                    </div>
                  </label>
                </div>
                {(errors.agree ||
                  errors.name ||
                  errors.email ||
                  errors.question) && (
                  <div className={style.formContent__warn}>
                    Заполните обязательные поля
                  </div>
                )}
                {sendErr && (
                  <div className={style.formContent__warn}>{sendErr}</div>
                )}
                <button type='submit' className={style.formContent__btn}>
                  ОТПРАВИТЬ
                </button>
              </form>
            </div>
          )}
          {isFormSended && <SuccessForm name={userName} />}
        </div>
      </section>
    </>
  );
};

export default Form;
