import React from 'react';
import Header from './components/Header/Header';
import Main from './modules/Main/Main';
import How from './modules/How/How';
import Trophy from './modules/Trophy/Trophy';
import style from './App.module.scss';
import Footer from './components/Footer/Footer';
import Results from './modules/Results/Results';

function App() {
  return (
    <div className='wrapper'>
      <div className='content'>
        <Header />

        <Main />
        <div className={style.bgCon}>
          <How />
          <Trophy />
        </div>

        <Results />

        <Footer />
      </div>
    </div>
  );
}

export default App;
