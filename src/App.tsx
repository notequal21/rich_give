import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './modules/Main/Main';
import How from './modules/How/How';
import Trophy from './modules/Trophy/Trophy';
import style from './App.module.scss';
import Footer from './components/Footer/Footer';
import Results from './modules/Results/Results';
import Faq from './modules/Faq/Faq';
import Form from './modules/Form/Form';
import ModalCookie from './components/ModalCookie/ModalCookie';

declare global {
  interface Window {
    spBaseUrl: any;
  }
}

function App() {
  return (
    <div className='wrapper'>
      <div className='content'>
        <Header />

        <ModalCookie />

        <Routes>
          <Route
            path='/'
            element={
              <>
                <Main />
                <div className={style.bgCon}>
                  <How />
                  <Trophy />
                </div>
                <Results />
              </>
            }
          />
          <Route
            path='/faq'
            element={
              <>
                <div className={style.faqCon}>
                  <Faq />
                  <Form />
                </div>
              </>
            }
          />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
