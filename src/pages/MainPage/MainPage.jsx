import React, { useContext } from 'react';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import Info from '../../components/Info/Info';
import Repos from '../../components/Repos/Repos';
import Search from '../../components/Search/Search';

import { GithubContext } from '../../context/context';
import style from './MainPage.module.scss';

const MainPage = () => {
  const { isLoading } = useContext(GithubContext);
  if (isLoading) {
    return (
      <>
        <div>
          <Header />
          <div className={style.wrapperWithLoading}>
            <Search />
            <div className={style.containerWithLoading}>
              <span className="loader"></span>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <Header />
        <Search />
        <div className={style.wrapper}>
          <div className={style.container}>
            <Info />
            <Card />
            <Repos />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
