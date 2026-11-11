import styles from './Nav.module.css'
export default function Nav() {
  return <nav className={styles.nav}><a href="#top">Главная</a><a href="#articles">Статьи</a><a href="#about">О блоге</a></nav>
}
