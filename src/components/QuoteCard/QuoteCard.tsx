import { Quote } from "../../types/models";
import { Link } from "react-router-dom";
import { QuoteFormData } from "../../types/forms";
import * as quoteService from '../../services/quoteService' 
import { User } from "../../types/models";
import { Profile } from "../../types/models";

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
        <>
        <li><Link to={`/quotes/${quote.id}`}>Edit</Link></li>
        <button onClick={()=> props.handleDeleteQuote(quote.id)}>X</button>
        </>
      }
      <h1>{quote.quote}</h1>
      <p>{quote.author}</p>
    </article>
  )
}

export default QuoteCard