import "./App.css";
import Attribution from "./components/Attribution";

const ARTICLE_IMAGE_SRC = `${import.meta.env.BASE_URL}illustration-article.svg`;
const AVATAR_IMAGE_SRC = `${import.meta.env.BASE_URL}image-avatar.webp`;

function App() {
  return (
    <>
      <main>
        <article
          className="blog-card-container"
          aria-labelledby="blog-card-title"
        >
          <div className="blog-card">
            <div className="blog-card__image">
              <img
                src={ARTICLE_IMAGE_SRC}
                alt="Colorful illustration for the article"
              />
            </div>
            <div className="blog-card__details">
              <div className="blog-card__tag">
                <p className="blog-card__tag-text">Learning</p>
              </div>
              <p>
                <time className="blog-card__date" dateTime="2026-03-11">
                  Published 11 Mar 2026
                </time>
              </p>
              <h1 id="blog-card-title" className="blog-card__heading">
                HTML & CSS foundations
              </h1>
              <p className="blog-card__description">
                These languages are the backbone of every website, defining
                structure, content, and presentation.
              </p>
            </div>
            <address className="blog-card__author">
              <img
                src={AVATAR_IMAGE_SRC}
                alt="Greg Hooper"
                className="blog-card__author-image"
              />
              <p className="blog-card__author-name">Greg Hooper</p>
            </address>
          </div>
        </article>
      </main>
      <footer>
        <Attribution />
      </footer>
    </>
  );
}

export default App;
