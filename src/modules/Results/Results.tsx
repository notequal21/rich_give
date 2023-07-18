import { useState } from 'react';
import Select from '../../components/Select/Select';
import style from './Results.module.scss';
import searchIco from './assets/search.svg';
import { useMediaQuery } from 'usehooks-ts';

const Results = () => {
  const [currentSelectDate, setCurrentSelectDate] = useState('04.01 — 11.01');
  const isMobile = useMediaQuery('(max-width:767px)');

  return (
    <section className={style.results}>
      <div className={`container ${style.con}`}>
        <div className={style.results__title}>ПОБЕДИТЕЛИ РОЗЫГРЫШЕЙ</div>
        <div className={style.resultsFilter}>
          <div className={style.resultsFilter__item}>
            <div className={style.resultsFilter__itemSelect}>
              <Select
                current={currentSelectDate}
                setCurrent={setCurrentSelectDate}
                items={['04.01 — 11.01', '04.01 — 11.01', '04.01 — 11.01']}
              />
            </div>
            <div className={style.resultsFilter__itemLabel}>
              Выберите неделю, чтобы посмотреть победителей
            </div>
          </div>
          <div className={style.resultsFilter__item}>
            <label className={style.resultsFilter__itemInput}>
              <input type='number' placeholder='Поиск по номеру телефона' />
              <img src={searchIco} alt='' />
            </label>
            <div className={style.resultsFilter__itemLabel}>
              Введите последние 4 цифры
            </div>
          </div>
        </div>
        {!isMobile && (
          <table className={style.resultsTable}>
            <thead>
              <tr>
                <td>Дата розыгрыша</td>
                <td>ID</td>
                <td>Номер телефона</td>
                <td>Приз</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01.06.2023</td>
                <td>123456</td>
                <td>+7(***)***-45-93</td>
                <td>Подарочный сертификат Озон</td>
              </tr>
              <tr>
                <td>01.06.2023</td>
                <td>123456</td>
                <td>+7(***)***-45-93</td>
                <td>Подарочный сертификат Озон</td>
              </tr>
              <tr>
                <td>01.06.2023</td>
                <td>123456</td>
                <td>+7(***)***-45-93</td>
                <td>Подарочный сертификат Озон</td>
              </tr>
              <tr>
                <td>01.06.2023</td>
                <td>123456</td>
                <td>+7(***)***-45-93</td>
                <td>Подарочный сертификат Озон</td>
              </tr>
              <tr>
                <td>01.06.2023</td>
                <td>123456</td>
                <td>+7(***)***-45-93</td>
                <td>Подарочный сертификат Озон</td>
              </tr>
              <tr>
                <td>01.06.2023</td>
                <td>123456</td>
                <td>+7(***)***-45-93</td>
                <td>Подарочный сертификат Озон</td>
              </tr>
              <tr>
                <td>01.06.2023</td>
                <td>123456</td>
                <td>+7(***)***-45-93</td>
                <td>Подарочный сертификат Озон</td>
              </tr>
              <tr>
                <td>01.06.2023</td>
                <td>123456</td>
                <td>+7(***)***-45-93</td>
                <td>Подарочный сертификат Озон</td>
              </tr>
              <tr>
                <td>01.06.2023</td>
                <td>123456</td>
                <td>+7(***)***-45-93</td>
                <td>Подарочный сертификат Озон</td>
              </tr>
              <tr>
                <td>01.06.2023</td>
                <td>123456</td>
                <td>+7(***)***-45-93</td>
                <td>Подарочный сертификат Озон</td>
              </tr>
            </tbody>
          </table>
        )}

        {isMobile && (
          <div className={style.resultsList}>
            <div className={style.resultsList__item}>
              <div className={style.resultsList__itemCol}>
                <div className={style.resultsList__itemRow}>ДАТА РОЗЫГРЫША</div>
                <div className={style.resultsList__itemRow}>ID</div>
                <div className={style.resultsList__itemRow}>НОМЕР</div>
                <div className={style.resultsList__itemRow}>ТЕЛЕФОНАПРИЗ</div>
              </div>
              <div className={style.resultsList__itemCol}>
                <div className={style.resultsList__itemRow}>01.01.2022</div>
                <div className={style.resultsList__itemRow}>3293892</div>
                <div className={style.resultsList__itemRow}>
                  +7(***)***-30-31
                </div>
                <div className={style.resultsList__itemRow}>
                  Подарочный сертификат Озон
                </div>
              </div>
            </div>
            <div className={style.resultsList__item}>
              <div className={style.resultsList__itemCol}>
                <div className={style.resultsList__itemRow}>ДАТА РОЗЫГРЫША</div>
                <div className={style.resultsList__itemRow}>ID</div>
                <div className={style.resultsList__itemRow}>НОМЕР</div>
                <div className={style.resultsList__itemRow}>ТЕЛЕФОНАПРИЗ</div>
              </div>
              <div className={style.resultsList__itemCol}>
                <div className={style.resultsList__itemRow}>01.01.2022</div>
                <div className={style.resultsList__itemRow}>3293892</div>
                <div className={style.resultsList__itemRow}>
                  +7(***)***-30-31
                </div>
                <div className={style.resultsList__itemRow}>
                  Подарочный сертификат Озон
                </div>
              </div>
            </div>
            <div className={style.resultsList__item}>
              <div className={style.resultsList__itemCol}>
                <div className={style.resultsList__itemRow}>ДАТА РОЗЫГРЫША</div>
                <div className={style.resultsList__itemRow}>ID</div>
                <div className={style.resultsList__itemRow}>НОМЕР</div>
                <div className={style.resultsList__itemRow}>ТЕЛЕФОНАПРИЗ</div>
              </div>
              <div className={style.resultsList__itemCol}>
                <div className={style.resultsList__itemRow}>01.01.2022</div>
                <div className={style.resultsList__itemRow}>3293892</div>
                <div className={style.resultsList__itemRow}>
                  +7(***)***-30-31
                </div>
                <div className={style.resultsList__itemRow}>
                  Подарочный сертификат Озон
                </div>
              </div>
            </div>
            <div className={style.resultsList__item}>
              <div className={style.resultsList__itemCol}>
                <div className={style.resultsList__itemRow}>ДАТА РОЗЫГРЫША</div>
                <div className={style.resultsList__itemRow}>ID</div>
                <div className={style.resultsList__itemRow}>НОМЕР</div>
                <div className={style.resultsList__itemRow}>ТЕЛЕФОНАПРИЗ</div>
              </div>
              <div className={style.resultsList__itemCol}>
                <div className={style.resultsList__itemRow}>01.01.2022</div>
                <div className={style.resultsList__itemRow}>3293892</div>
                <div className={style.resultsList__itemRow}>
                  +7(***)***-30-31
                </div>
                <div className={style.resultsList__itemRow}>
                  Подарочный сертификат Озон
                </div>
              </div>
            </div>
            <div className={style.resultsList__item}>
              <div className={style.resultsList__itemCol}>
                <div className={style.resultsList__itemRow}>ДАТА РОЗЫГРЫША</div>
                <div className={style.resultsList__itemRow}>ID</div>
                <div className={style.resultsList__itemRow}>НОМЕР</div>
                <div className={style.resultsList__itemRow}>ТЕЛЕФОНАПРИЗ</div>
              </div>
              <div className={style.resultsList__itemCol}>
                <div className={style.resultsList__itemRow}>01.01.2022</div>
                <div className={style.resultsList__itemRow}>3293892</div>
                <div className={style.resultsList__itemRow}>
                  +7(***)***-30-31
                </div>
                <div className={style.resultsList__itemRow}>
                  Подарочный сертификат Озон
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={style.results__more}>ПОКАЗАТЬ ЕЩЕ</div>
      </div>
    </section>
  );
};

export default Results;
