import React from 'react';

import styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <h4>ToDo - Organizando sua vida</h4>
      <br/>
      <p>
        App desenvolvido por{" "}
        <a
          href="https://github.com/thiiagolourenco"
          target="_blank"
          rel="noreferrer"
        >
          Thiago Lourenço
        </a>
      </p>
    </footer>
  );
}

export default Footer;