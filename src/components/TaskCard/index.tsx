import React from 'react';

import styles from "./styles.module.scss";
import check from "../../assets/check-mark-32.png";

type Task = {
  id: number,
  title: string,
  person: string,
  date: string,
  hour: string
}

type TaskCardProps = {
  allTasks: Task[]
}

function TaskCard({ allTasks }:TaskCardProps) {
  
  return (
    <div className={styles.container}>
      <section className={styles.allEpisodes}>
        <table cellSpacing={0}>
            <thead>
              <tr>
                <th>Identificador</th>
                <th>Título</th>
                <th>Responsável</th>
                <th>Data</th>
                <th>Hora</th>
                <th>Concluir</th>
              </tr>
            </thead>            
            <tbody>
              {allTasks.map((task, index) => {
                return (
                  <tr key={task.title}>
                    <td>{task.id}</td>
                    <td>{task.title}</td>
                    <td>{task.person}</td>
                    <td style={{ width: 100}}>{task.date}</td>
                    <td>{task.hour}</td>
                    <td>
                      <button onClick={() => {}}>
                        <img src={check} alt="Concluir tarefa"/>
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr></tr>
            </tbody>
        </table>
      </section>
    </div>
  );
}

export default TaskCard;