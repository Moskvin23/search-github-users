import { useContext } from 'react';
import { GithubContext } from '../../context/context';
import { GoRepo, GoGist } from 'react-icons/go';

import style from './Info.module.scss';

const Info = () => {
  const { githubUser } = useContext(GithubContext);
  const { public_repos, public_gists } = githubUser;
  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: 'repos',
      value: public_repos,
    },
    {
      id: 2,
      icon: <GoGist className="icon" />,
      label: 'gists',
      value: public_gists,
    },
  ];
  return (
    <>
      <div className={style.container}>
        {items.map((item) => {
          return <Item key={item.id} {...item}></Item>;
        })}
      </div>
    </>
  );
};

const Item = ({ icon, label, value }) => {
  return (
    <div className={style.item}>
      <div className={style.icon}>{icon}</div>

      <div className={style.valueWithLabel}>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
};
export default Info;
