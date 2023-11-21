import './App.css'
import BookFrom from './components/BookForm/BookForm'
import Filter from './components/Filter/Filter'
import BookList from './components/BookList/BookList'
import Error from './components/Error/Error'

function App() {
  return (
    <div className='app'>
      <header className="app-header">
        <h1>The Library App</h1>
      </header>
      <main className='app-main'>
        <div className="app-left-column">
          <BookFrom />
        </div>
        <div className="app-right-column">
          <Filter />
          <BookList />
        </div>
      </main>
      <Error />
    </div>
  )
}

export default App
