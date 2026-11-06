import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <article className="article">
      <h1 className="article__title">404 — страница не найдена</h1>
      <p className="article__paragraph">
        Такой страницы на сайте нет. Возможно, ссылка устарела или в адресе опечатка.
      </p>
      <Link className="article__link" to="/">
        На главную
      </Link>
    </article>
  );
}