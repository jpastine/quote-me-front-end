import { useState } from "react";

import { QuoteFormData } from "../../types/forms";
import { Quote } from "../../types/models";

import * as quoteService from '../../services/quoteService'

interface QuoteFormProps {
  quote: Quote;
}

const CreateQuote = (props: QuoteFormProps): JSX.Element => {
  const { quote } = props
  
  const [quoteData, setQuoteData] = useState({})

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setQuoteData({ ...quoteData, [evt.target.name]: evt.target.value});
  };
  
  const handleAddQuote =async (quoteData:QuoteFormData) => {
    const newQuote = await quoteService.createQuote(quoteData)
    setQuoteData([newQuote, ...quoteData])
  }
} 
