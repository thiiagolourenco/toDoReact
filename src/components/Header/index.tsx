import React from 'react';
import logo from "../../assets/logo.png"; 
import styles from "./styles.module.scss";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={logo} alt="Logo do ToDo"></img>
      <ul>
        <li><a>Início</a></li>
        <li><a>Nova Tarefa</a></li>
        <li><a>Sincronizar</a></li>
      </ul>
    </header>
  );
}

export default Header;
