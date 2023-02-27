import { Quote } from "../../types/models";
import { Link } from "react-router-dom";

interface QuoteCardProps {
  quote: Quote;
}

const QuoteCard = (props: QuoteCardProps): JSX.Element => {
  const { quote } = props
  
  return (
    <article>
      {/* <li><Link to={`/quotes/${id}`}>Edit</Link></li> */}
      <h1>{quote.quote}</h1>
      <p>{quote.author}</p>
    </article>
  )
}

export default QuoteCard