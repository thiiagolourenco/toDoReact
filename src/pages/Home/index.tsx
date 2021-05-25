import React, { useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';

import styles from './styles.module.scss';

function Home() {
  const [isActive, setIsActive] = useState('');
  
  function changeFilterState(filterTitle: string){
    setIsActive(filterTitle);
  };

  return (
    <div>
      <Header/>
      <h2>Filtros</h2>
      <div className={styles.cardContainer}>
        <FilterCard title="Todos" isActive={isActive === 'all'} changingColor={() => changeFilterState('all')}/>
        <FilterCard title="Dia" isActive={isActive === 'day'} changingColor={() => changeFilterState('day')}/>
        <FilterCard title="Semana" isActive={isActive === 'week'} changingColor={() => changeFilterState('week')}/>
        <FilterCard title="Mês" isActive={isActive === 'month'} changingColor={() => changeFilterState('month')}/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
