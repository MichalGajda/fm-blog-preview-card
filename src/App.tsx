import './App.css'
import Attribution from './components/Attribution'

function App() {

  return (
    <>
      <main>
        <div className="blog-card">
          <div className="blog-card__image"></div>
          <div className="blog-card__tag"></div>
          <p className="blog-card__date"></p>
          <h1 className="blog-card__heading"></h1>
          <p className="blog-card__description"></p>
          <div className="blog-card__author">
            <img src="/image-avatar.webp" alt="Picture of the author of the blog card" className="author__image" />
            <p className="author__name"></p>
          </div>
        </div>
      </main>
      <Attribution />
    </>
  )
}

export default App
