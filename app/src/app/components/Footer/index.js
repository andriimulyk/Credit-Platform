"use client"
import styles from './Footer.module.css';
import React from 'react';

  
function Footer() {  
  return (
    <>
    <footer className={styles.footer}>
   <a  href='https://www.instagram.com/s.p.studio.ua/' target="_blank" className={styles.fd}>© 2024 AgeSoft.</a>
    </footer>
    </>
  );
}

export default Footer;