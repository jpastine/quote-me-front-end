import * as tokenService from './tokenService'

// types
import { Quote } from '../types/models'
import { QuoteFormData } from '../types/forms'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/quotes`

async function getAllQuotes(): Promise<Quote[]> {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Quote[]
  } catch (error) {
    throw error
  }
}

async function createQuote(quoteData:QuoteFormData): Promise<Quote> {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quoteData)
    })
    return await res.json()
  } catch (error) {
    throw error;
  }
}

async function editQuote(quoteData: QuoteFormData): Promise<Quote> {
  try {
    const res = await fetch(`${BASE_URL}/${quoteData.id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quoteData)
    })
    return await res.json() as Quote
  } catch (error) {
    throw error
  }
}

async function deleteQuote(id: number): Promise<void> {
  console.log('this is working');
  
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
  } catch (error) {
    throw error
  }
}

export {
  getAllQuotes,
  createQuote,
  editQuote,
  deleteQuote
}