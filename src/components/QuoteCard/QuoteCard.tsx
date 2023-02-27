import { Quote } from "../../types/models";
import { Link } from "react-router-dom";
import { QuoteFormData } from "../../types/forms";

interface QuoteCardProps {
  quote: Quote;
 
}

const QuoteCard = (props: QuoteCardProps): JSX.Element => {
  const { quote } = props
  
  return (
    <article>
      <li><Link to={`/quotes/${quote.id}`}>Edit</Link></li>
      <h1>{quote.quote}</h1>
      <p>{quote.author}</p>
    </article>
  )
}

export default QuoteCard