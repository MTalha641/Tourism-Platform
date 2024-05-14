import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Tours from './pages/Tours'
import BlogPage from './pages/BlogPage'
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'
import Payment from './pages/Payment'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import BookedTours from './pages/BookedTours'
import ViewBookedTour from './pages/ViewBookedTour'

function App() {

  console.log('came first')
  const email = localStorage.getItem('email');

  return (
    <>

      {email ? (
        <>
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/tours' element={<Tours />} />
              <Route path='/bookedtours' element={<BookedTours />} />
              <Route path='/view' element={<ViewBookedTour />} />
              <Route path='/blog' element={<BlogPage />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/pay' element={<Payment />} />
              <Route path='/signup' element={<SignUp />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </>
      ) : (
        
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/*' element={<SignIn />} />
        </Routes>
      </BrowserRouter>

      )}
    </>
  )
}

export default App
