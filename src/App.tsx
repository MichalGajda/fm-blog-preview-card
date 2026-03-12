import "./App.css";
import Attribution from "./components/Attribution";

function App() {
  return (
    <>
      <main>
        <div className="blog-card-container">
          <div className="blog-card">
            <div className="blog-card__image">
              <img
                src="illustration-article.svg"
                alt="Colorful illustration for the atricle"
              />
            </div>
            <div className="blog-card__details">
              <div className="blog-card__tag">
                <p className="blog-card__tag-text">Learning</p>
              </div>
              <p className="blog-card__date">Published 11 Mar 2026</p>
              <h1 className="blog-card__heading">HTML & CSS foundations</h1>
              <p className="blog-card__description">
                These languages are the backbone of every website, defining
                structure, content, and presentation.
              </p>
            </div>
            <div className="blog-card__author">
              <img
                src="image-avatar.webp"
                alt="Picture of the author of the blog card"
                className="blog-card__author-image"
              />
              <p className="blog-card__author-name">Greg Hooper</p>
            </div>
          </div>
        </div>
      </main>
      <Attribution />
    </>
  );
}

export default App;
