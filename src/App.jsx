import './App.css'

const books = [
  {
    id: 1,
    title: "When the Dogwood Blooms: Seasons in a Boy's Life",
    author: "Stanley B. Howard",
    description: "Though not a Homeric odyssey, this a fictionalized life journey, told as only the traveller could tell it.",
    amazonLink: "https://www.amazon.com/When-Dogwood-Blooms-Seasons-Boys-ebook/dp/B0BSNQ5T1L",
    coverImage: "./assets/Trees7.png",
    altText: "When the Dogwood Blooms: Seasons in a Boy's Life"
  },

  {
    id: 2,
    title: "Icarus: An American Odyssey", 
    author: "Stanley B. Howard",
    description: "A history-based American Odyssey told by the raven friend of Edgar Allan Poe and Ulysses S. Grant.",
    amazonLink: "https://www.amazon.com/Icarus-American-Stanley-B-Howard-ebook/dp/B0BW4LQNN1",
    coverImage: "./assets/Light2.jpg",
    altText: "Icarus: An American Odyssey"
  },

  {
    id: 3,
    title: "Me: Jack in the Box with OCD", 
    author: "Stanley B. Howard",
    description: "A story of pure-O OCD and how it affects daily life.",
    amazonLink: "https://www.amazon.com/Me-Jack-Stanley-B-Howard-ebook/dp/B0G2KDVWZ7",
    coverImage: "./assets/Jack12.png",
    altText: "Me: Jack in the Box with OCD"
  }

]


function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Books by Stanley B. Howard</h1>
        <p>Discover my collection of books on Amazon</p>
      </header>

      <main className="main">
        <section className="books-grid">
          {books.map((book) => (
            <article key={book.id} className="book-card">
              <div className="book-cover">
                <img 
                  src={book.coverImage} 
                  alt={book.altText}
                  className="cover-image"
                />
              </div>
              <div className="book-info">
                <h2 className="book-title">{book.title}</h2>
                <p className="book-author">by {book.author}</p>
                <p className="book-description">{book.description}</p>
                <a 
                  href={book.amazonLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="amazon-button"
                >
                  Buy on Amazon
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
