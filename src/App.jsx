import articles from './articles.js'
import Nav from './Nav.jsx'
import styles from './Blog.module.css'

function Header({ count }) {
  return <header id="top" className={styles.header}><h1>React Blog</h1><p>Статей в блоге: {count}</p><Nav /></header>
}

function ArticleCard({ article }) {
  const { id, title, author, tag, excerpt, date } = article
  return <article className={styles.card}>
    <svg viewBox="0 0 240 110" role="img" aria-label={`Иллюстрация к статье «${title}»`}>
      <rect width="240" height="110" fill={id % 2 ? '#3448aa' : '#3c5970'} />
      <circle cx="205" cy="28" r="48" fill="#ffffff25" />
      <text x="18" y="70" fill="white" fontSize="32" fontFamily="system-ui">0{id} /</text>
    </svg>
    <div className={styles.body}><small>{tag}</small><h3>{title}</h3><p>{excerpt}</p>
      <footer>{author} · <time dateTime={date}>{date.split('-').reverse().join('.')}</time></footer>
    </div>
  </article>
}

function ArticleList({ items, compact }) {
  return <section id="articles" aria-label="Статьи" className={compact ? styles.compact : styles.list}>
    {items.map(article => <ArticleCard key={article.id} article={article} />)}
  </section>
}

export default function App() {
  return <><Header count={articles.length} /><main><h2>Статьи</h2>
    <ArticleList items={articles} /><p id="about">Учебный блог о разработке интерфейсов на React.</p>
  </main></>
}
