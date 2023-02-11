import React, { useContext } from 'react';
import { GithubContext } from '../../context/context';
import Chart1 from '../Chart/Chart';
import Chart2 from '../Chart/Chart2';
import style from './Repos.module.scss';
import MediaQuery from 'react-responsive';

const Repos = () => {
  const { repos } = useContext(GithubContext);
  let languages = repos.reduce((accum, nextItem) => {
    const { language } = nextItem;
    if (!language) return accum;
    if (!accum[language]) {
      accum[language] = { label: language, value: 1 };
    } else {
      accum[language] = { ...accum[language], value: accum[language].value + 1 };
    }
    return accum;
  }, {});
  languages = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  return (
    <>
      <MediaQuery minWidth={560}>
        <div className={style.container}>
          <div className={style.chart}>
            <Chart2 data={languages} />
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={560}>
        <div className={style.container2}>
          <div className={style.chart2}>
            <Chart1 data={languages} />
          </div>
        </div>
      </MediaQuery>
    </>
  );
};

export default Repos;
