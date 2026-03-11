import "./App.css";
import Attribution from "./components/Attribution";

function App() {
  return (
    <>
      <main>
        <div className="blog-card">
          <div className="blog-card__image">
            <img
              className=""
              src="illustration-article.svg"
              alt="Colorful illustration for the atricle"
            />
          </div>
          <div className="blog-card__details">
            <div className="details__tag">
              <p>Learning</p>
            </div>
            <p className="details__date">Published 11 Mar 2026</p>
            <h1 className="details__heading">HTML & CSS foundations</h1>
            <p className="details__description">
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
          </div>
          <div className="blog-card__author">
            <img
              src="image-avatar.webp"
              alt="Picture of the author of the blog card"
              className="author__image"
            />
            <p className="author__name">Greg Hooper</p>
          </div>
        </div>
      </main>
      <Attribution />
    </>
  );
}

export default App;
