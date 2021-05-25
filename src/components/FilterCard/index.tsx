import React from 'react';

import styles from "./styles.module.scss";
import filter from "../../assets/filter.png";

type PropsFilter = {
  title: string,
  isActive: boolean,
  changingColor: () => void
}

function FilterCard({title, isActive, changingColor}: PropsFilter) {
  
  return (
    <div className={styles.homepage}>
      <button type="button" className={styles.latestEpisodes} onClick={changingColor}>
        <ul>
          <li className={isActive ? styles.isActive : ''}>
            <div className={styles.episodeDetails}>
              <img src={filter} alt="Ícone de filtro"/>
              <p>{title}</p>
            </div>
          </li>
        </ul>
      </button>
    </div>
  );
}

export default FilterCard;