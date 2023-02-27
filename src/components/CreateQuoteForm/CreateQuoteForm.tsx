import { useState } from "react";
import { QuoteFormData } from "../../types/forms";

type AddQuoteProps = {
  handleAddQuote: (quoteData: QuoteFormData) => void
}



const CreateQuoteForm = (): JSX.Element => {
  
  const [formData, setFormData] = useState<QuoteFormData>({
    quote: '',
    author: '',
  })

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value});
  };

  const handleTextAreaChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }
  
  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    
  }


  return (
    <>
    <main>
      <form onSubmit={handleSubmit}>
        <label>
          Add a quote
        </label>
        <textarea 
          name="quote" 
          id="quote"
          onChange={handleTextAreaChange}
          >

        </textarea>
        <input type="text" name="author" onChange={handleInputChange}/>
        <button type="submit">Add Quote</button>
      </form>
    </main>
    </>
  ) 
  
} 

export default CreateQuoteForm
