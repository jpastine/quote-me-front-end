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

export {
  getAllQuotes,
  createQuote,
}