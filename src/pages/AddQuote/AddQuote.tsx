import { QuoteFormData } from "../../types/forms"
import CreateQuoteForm from "../../components/CreateQuoteForm/CreateQuoteForm"
import styles from './AddQuote.module.css'

type AddQuoteProps = {
  handleAddQuote: (quoteData: QuoteFormData) => void
}

const AddQuote = (props: AddQuoteProps) => {
  return (
    <main>
      
      <div>
        <CreateQuoteForm handleAddQuote={props.handleAddQuote}/>
      </div>
    </main>
  )
}

export default AddQuote