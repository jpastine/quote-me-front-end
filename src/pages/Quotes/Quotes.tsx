// types
import { Quote } from '../../types/models'

import QuoteCard from '../../components/QuoteCard/QuoteCard'

interface QuotesProps {
  quotes: Quote[]
}

const Quotes = (props: QuotesProps): JSX.Element => {
  const { quotes } = props

  if(!quotes.length) return <p>No quotes yet</p>

  return (
    <>
      <h1>Hello. This is a list of all the quotes.</h1>
      {quotes.map((quote: Quote) =>
        <QuoteCard key={quote.id} quote={quote} />
      )}
    </>
  )
}

export default Quotes
