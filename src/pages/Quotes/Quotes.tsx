// types
import { Quote } from '../../types/models'
import { User } from '../../types/models';
import QuoteCard from '../../components/QuoteCard/QuoteCard'
import styles from './Quotes.module.css'


interface QuotesProps {
  quotes: Quote[];
  handleDeleteQuote: (id: number) => void;
  user: User | null;
  
}

const Quotes = (props: QuotesProps): JSX.Element => {
  // const { quotes } = props

  if(!props.quotes.length) return <p>No quotes yet</p>

  return (
    <main className={styles.container}>
      {props.quotes.map((quote: Quote) =>
        <QuoteCard key={quote.id} quote={quote} handleDeleteQuote={props.handleDeleteQuote} user={props.user} />
      )}
    </main>
  )
}

export default Quotes
