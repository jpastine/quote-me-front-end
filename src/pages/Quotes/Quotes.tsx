// types
import { Quote } from '../../types/models'

const Quotes = (): JSX.Element => {

  if(!quotes.length) return <p>No quotes yet</p>

  return (
    <>
      <h1>Hello. This is a list of all the quotes.</h1>
      {quotes.map((quote: Quote) =>
        <p key={quote.profileId}>{quote.quote}{quote.author}</p>
          
      )}
    </>
  )
}

export default Quotes
