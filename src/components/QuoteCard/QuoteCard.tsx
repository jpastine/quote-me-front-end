import { Quote } from "../../types/models";

interface QuoteCardProps {
  quote: Quote;
}

const QuoteCard = (props: QuoteCardProps): JSX.Element => {
  const { quote } = props

  return (
    <article>
      <h1>{quote.quote}</h1>
      <h2>{quote.author}</h2>
    </article>
  )
}

export default QuoteCard