import React, { useContext } from 'react';
import { GithubContext } from '../../context/context';
import { MdBusiness } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
import { RiGitRepositoryLine } from 'react-icons/ri';
import style from './Card.module.scss';

const Card = () => {
  const { githubUser } = useContext(GithubContext);
  const { avatar_url, html_url, name, company, public_repos, location } = githubUser;
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.imageContainer}>
          <img src={avatar_url} alt={name} />
        </div>
        <a href={html_url} className="btn2">
          Follow
        </a>
      </div>
      <div>{<h3>{name}</h3> || 'The User without NickName'}</div>
      <div className={style.information}>
        <div className={style.links}>
          <p>
            <MdBusiness />
            {company || 'I`m a freelancer'}
          </p>
          <p>
            <MdLocationOn />
            {location || 'Europe'}
          </p>
          <p>
            <RiGitRepositoryLine />
            Repositories: {public_repos || 'At the moment User doesn`t have repositories'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
