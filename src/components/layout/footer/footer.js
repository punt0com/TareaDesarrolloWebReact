import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
    <div className="footer-content">
      <p>&copy; 2025 My Website.Primer esquelto, falta implementacion con API.</p>
      <div className={styles.socials}>
        <a href="https://facebook.com" target="_blank">Facebook</a>
        <a href="https://twitter.com" target="_blank">Twitter</a>
        <a href="https://instagram.com" target="_blank">Instagram</a>
      </div>
    </div>
  </footer>
  );
};

export default Footer;