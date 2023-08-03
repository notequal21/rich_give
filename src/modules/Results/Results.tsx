import { useEffect, useState, useRef } from 'react';
import Select from '../../components/Select/Select';
import style from './Results.module.scss';
import searchIco from './assets/search.svg';
import { useMediaQuery } from 'usehooks-ts';
import axios from 'axios';
import InputMask from 'react-input-mask';

const Results = () => {
  const [currentSelectDate, setCurrentSelectDate] = useState('04.01 — 11.01');
  const isMobile = useMediaQuery('(max-width:767px)');
  const [raffles, setRaffles] = useState([]);
  const [currentRaffleID, setCurrentRaffleID] = useState('');
  const [winners, setWinners]: any = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const [errText, setErrText] = useState('');
  const inputRef: any = useRef(null);

  useEffect(() => {
    axios.get(`${window.spBaseUrl}/json/main/`).then((response) => {
      setCurrentSelectDate(response.data.raffles[0].interval);
      setRaffles(response.data.raffles);
    });
    axios
      .post(`${window.spBaseUrl}/api/GetWinnerList`, {
        page: 0,
      })
      .then((response) => {
        console.log(response);
        if (response.data.isLastPage) {
          setIsLastPage(true);
        }
        setWinners(response.data.winners);
      })
      .catch((err) => {
        setWinners([]);
        setIsLastPage(true);
        setErrText(err.response.data.errorText);
      });
  }, []);

  const loadMore = () => {
    setCurrentPage(currentPage + 1);

    axios
      .post(`${window.spBaseUrl}/api/GetWinnerList`, {
        page: currentPage + 1,
      })
      .then((response) => {
        if (response.data.isLastPage) {
          setIsLastPage(true);
        }

        setWinners([...winners, ...response.data.winners]);
      })
      .catch((err) => console.log(err));
  };

  const handleSelect = (id: any) => {
    inputRef.current.value = '';

    axios
      .post(`${window.spBaseUrl}/api/GetWinnerList`, {
        page: currentPage,
        raffle: id,
      })
      .then((response) => {
        if (response.data.isLastPage) {
          setIsLastPage(true);
        }

        setWinners([...response.data.winners]);
      })
      .catch((err) => {
        console.log(err);
        setWinners([]);
        setIsLastPage(true);
        setErrText(err.response.data.errorText);
      });
    setCurrentPage(0);
    setIsLastPage(false);

    axios
      .post(`${window.spBaseUrl}/api/GetWinnerList`, {
        page: currentPage,
        raffle: id,
      })
      .then((response) => {
        if (response.data.isLastPage) {
          setIsLastPage(true);
        }

        setWinners([...response.data.winners]);
      })
      .catch((err) => {
        console.log(err);
        setWinners([]);
        setIsLastPage(true);
        setErrText(err.response.data.errorText);
      });
  };

  const handelInputFiler = (event: any) => {
    const value = event.target.value.replaceAll('_', '');

    if (value.length >= 4) {
      setWinners([]);
      setCurrentPage(0);
      setIsLastPage(false);

      axios
        .post(`${window.spBaseUrl}/api/GetWinnerList`, {
          page: currentPage,
          raffle: currentRaffleID.length > 0 ? currentRaffleID : '',
          search:
            value.length > 4 ? value.split('').slice(0, 4).join('') : value,
        })
        .then((response) => {
          if (response.data.isLastPage) {
            setIsLastPage(true);
          }
          setWinners([...response.data.winners]);
        })
        .catch((err) => {
          console.log(err);
          setWinners([]);
          setIsLastPage(true);
          setErrText(err.response.data.errorText);
        });
    } else if (value.length === 0) {
      setWinners([]);
      setCurrentPage(0);
      setIsLastPage(false);

      axios
        .post(`${window.spBaseUrl}/api/GetWinnerList`, {
          page: 0,
        })
        .then((response) => {
          setWinners(response.data.winners);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <section id='winners' className={style.results}>
      <div className={`container ${style.con}`}>
        <div className={style.results__title}>ПОБЕДИТЕЛИ РОЗЫГРЫШЕЙ</div>
        <div className={style.resultsFilter}>
          <div className={style.resultsFilter__item}>
            <div className={style.resultsFilter__itemSelect}>
              <Select
                current={currentSelectDate}
                setCurrent={setCurrentSelectDate}
                handle={handleSelect}
                items={raffles}
              />
            </div>
            <div className={style.resultsFilter__itemLabel}>
              Выберите неделю, чтобы посмотреть победителей
            </div>
          </div>
          <div className={style.resultsFilter__item}>
            <label className={style.resultsFilter__itemInput}>
              {/* <input type='number' placeholder='Поиск по номеру телефона' /> */}
              <InputMask
                // type='number'
                placeholder='Поиск по номеру телефона'
                mask='9999'
                ref={inputRef}
                onInput={handelInputFiler}
              />
              <img src={searchIco} alt='' />
            </label>
            <div className={style.resultsFilter__itemLabel}>
              Введите последние 4 цифры
            </div>
          </div>
        </div>
        {!isMobile && (
          <>
            <table
              className={`${style.resultsTable} ${
                winners.length <= 0 && style.noneResult
              }`}
            >
              <thead>
                <tr>
                  <td>Дата розыгрыша</td>
                  <td>ID</td>
                  <td>Номер телефона</td>
                  <td>Приз</td>
                </tr>
              </thead>
              {winners.length >= 1 ? (
                <tbody>
                  {winners.map((item: any, index: any) => (
                    <tr key={index}>
                      <td>{item.date}</td>
                      <td>{item.id}</td>
                      {/* <td>+7(***)***-45-93</td> */}
                      <td>+7(***)**{item.phone}</td>
                      <td>{item.prize}</td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                ''
              )}
            </table>
            {winners.length <= 0 && (
              <div className={style.noReuslt}>{errText}</div>
            )}
          </>
        )}

        {isMobile &&
          (winners.length >= 1 ? (
            <div className={style.resultsList}>
              {winners.map((item: any, index: any) => (
                <div key={index} className={style.resultsList__item}>
                  <div className={style.resultsList__itemRow}>
                    <div className={style.resultsList__itemCol}>
                      ДАТА РОЗЫГРЫША
                    </div>
                    <div className={style.resultsList__itemCol}>
                      {item.date}
                    </div>
                  </div>
                  <div className={style.resultsList__itemRow}>
                    <div className={style.resultsList__itemCol}>ID</div>
                    <div className={style.resultsList__itemCol}>{item.id}</div>
                  </div>
                  <div className={style.resultsList__itemRow}>
                    <div className={style.resultsList__itemCol}>
                      НОМЕР ТЕЛЕФОНА
                    </div>
                    <div className={style.resultsList__itemCol}>
                      {item.phone}
                    </div>
                  </div>
                  <div className={style.resultsList__itemRow}>
                    <div className={style.resultsList__itemCol}>ПРИЗ</div>
                    <div className={style.resultsList__itemCol}>
                      {item.prize}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={style.noReuslt}>{errText}</div>
          ))}
        {!isLastPage && (
          <div onClick={loadMore} className={style.results__more}>
            ПОКАЗАТЬ ЕЩЕ
          </div>
        )}
      </div>
    </section>
  );
};

export default Results;
