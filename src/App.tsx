// npm modules 
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Quotes from './pages/Quotes/Quotes'
import AddQuote from './pages/AddQuote/AddQuote'


// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as quoteService from './services/quoteService'

// stylesheets
import './App.css'

// types
import { User, Quote } from './types/models'
import { QuoteFormData } from './types/forms'

function App(): JSX.Element {
  const navigate = useNavigate()
  
  const [user, setUser] = useState<User | null>(authService.getUser())
  const [quotes, setQuotes] = useState<Quote[]>([])

  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  useEffect((): void => {
    const fetchQuotes = async (): Promise<void> => {
      try {
        const quoteData: Quote[] = await quoteService.getAllQuotes()
        setQuotes(quoteData)  
      } catch (error) {
        console.log(error);
      }
    }
    user ? fetchQuotes() : setQuotes([])
  }, [user])

  const handleAddQuote = async (quoteData: QuoteFormData): Promise<void> => {
    const newQuote = await quoteService.createQuote(quoteData)
    setQuotes([newQuote, ...quotes])
    navigate('/quotes')
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/quotes'
          element={
            <ProtectedRoute user={user}>
              <Quotes quotes={quotes}/>
            </ProtectedRoute>
          }
        />
        <Route 
          path='/add-quote'
          element={
            <AddQuote handleAddQuote={handleAddQuote} />
          }/>
      </Routes>
    </>
  )
}

export default App
