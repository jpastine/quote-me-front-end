import { useState } from "react";
import { QuoteFormData } from "../../types/forms";


const CreateQuoteForm = (): JSX.Element => {
  
  const [formData, setFormData] = useState<QuoteFormData>({
    quote: '',
    author: '',
  })

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value});
  };
  
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
          onChange={handleChange}>

        </textarea>
        <input type="text" name="author" />
      </form>
    </main>
    </>
  ) 
  
} 

export default CreateQuoteForm
