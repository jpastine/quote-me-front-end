// types
import { Quote } from '../../types/models'

import QuoteCard from '../../components/QuoteCard/QuoteCard'
import { QuoteFormData } from '../../types/forms';

interface QuotesProps {
  quotes: Quote[];
  handleDeleteQuote: (id: number) => void
}

const Quotes = (props: QuotesProps): JSX.Element => {
  // const { quotes } = props

  if(!props.quotes.length) return <p>No quotes yet</p>

  return (
    <main>
      {props.quotes.map((quote: Quote) =>
        <QuoteCard key={quote.id} quote={quote} handleDeleteQuote={props.handleDeleteQuote}/>
      )}
    </main>
  )
}

export default Quotes
