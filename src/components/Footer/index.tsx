import React from 'react';

import styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p className="">
        App desenvolvido por{" "}
        <a
          href="https://github.com/thiiagolourenco"
          target="_blank"
          rel="noreferrer"
        >
          Thiago Lourenço
        </a>
      </p>
      <p className="">
        <strong>Spring + React</strong>
      </p>
    </footer>
  );
}

export default Footer;