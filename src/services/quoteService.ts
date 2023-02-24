import * as tokenService from './tokenService'

// types
import { Quote } from '../types/models'

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

export {
  getAllQuotes,
}