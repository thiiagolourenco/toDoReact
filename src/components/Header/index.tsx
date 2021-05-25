import React from 'react';

import logo from "../../assets/logo.png";
import bell from "../../assets/bell.png"; 

import styles from "./styles.module.scss";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={logo} alt="Logo do ToDo"></img>
      <ul>
        <li><a href="/#">Início</a></li>
        <li className={styles.leftBorder}><a href="/#">Nova Tarefa</a></li>
        <li className={styles.leftBorder}><a href="/#">Sincronizar</a></li>
        <li className={styles.leftBorder}>
          <div className={styles.notification}>
            <img src={bell} alt="Icone de notificação"></img>
            <span>5</span>  
          </div>
        </li>
      </ul>
    </header>
  );
}

export default Header;
