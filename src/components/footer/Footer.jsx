import styles from './Footer.module.scss';

export default function Footer() {

  const date = new Date();
  let year = date.getFullYear();


 
  return (
    <footer className={styles.footer}>
      &copy; {year}. All Right Reserved.
    </footer>
  );
}
