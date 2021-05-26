import React, { useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TaskCard from '../../components/TaskCard';
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
      <h2>Tarefas</h2>
      <div className={styles.cardContainer}>
        <TaskCard allTasks={[
          {
            id: 1,
            title: 'Estudar Matemática',
            person: 'Júlia',
            date: '30/06/2021',
            hour: '14:00'
          },
          {
            id: 2,
            title: 'Jogar bola',
            person: 'Thiago',
            date: '28/05/2021',
            hour: '18:00'
          },
          {
            id: 3,
            title: 'Estuda podologia',
            person: 'Brenda',
            date: '25/05/2021',
            hour: '10:00'
          },
          {
            id: 4,
            title: 'Comprar pão',
            person: 'João',
            date: '28/06/2021',
            hour: '16:00'
          },
          {
            id: 5,
            title: 'Fazer a feira',
            person: 'Hugão',
            date: '28/06/2021',
            hour: '16:00'
          }
        ]}/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
