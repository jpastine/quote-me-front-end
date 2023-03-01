import { Quote } from "../../types/models";
import { Link } from "react-router-dom"; 
import { User } from "../../types/models";
import styles from './QuoteCard.module.css'

interface QuoteCardProps {
  quote: Quote;
  handleDeleteQuote: (id: number) => void;
  user: User | null
  
}

const QuoteCard = (props: QuoteCardProps, ): JSX.Element => {
  const { quote } = props
  
  
  
  return (
    <article>
      {  props.user?.id === quote.profileId &&
        <div className={styles.div}>
          <Link to={`/quotes/${quote.id}`} state={quote}>Edit</Link>
          <button onClick={()=> props.handleDeleteQuote(quote.id)}>X</button>
        </div>
      }
      <h1>{quote.quote}</h1>
      <p>{quote.author}</p>
    </article>
  )
}

export default QuoteCard