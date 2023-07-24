import style from './SuccessForm.module.scss';

interface ISuccessForm {
  name: string;
}

const SuccessForm = ({ name }: ISuccessForm) => {
  return (
    <div className='container'>
      <section className={style.success}>
        <div className={style.success__title}>СПАСИБО, {name}!</div>
        <div className={style.success__subtitle}>
          Ваше сообщение отправлено, мы свяжемся с вами в ближайшее время.
        </div>
      </section>
    </div>
  );
};

export default SuccessForm;
