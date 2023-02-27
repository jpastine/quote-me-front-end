import { QuoteFormData } from "../../types/forms"
import CreateQuoteForm from "../../components/CreateQuoteForm/CreateQuoteForm"

type AddQuoteProps = {
  handleAddQuote: (quoteData: QuoteFormData) => void
}

const AddQuote = (props: AddQuoteProps) => {
  return (
    <>
      <h1>Add a New Quote</h1>
      <div>
        <CreateQuoteForm handleAddQuote={props.handleAddQuote}/>
      </div>
    </>
  )
}

export default AddQuote