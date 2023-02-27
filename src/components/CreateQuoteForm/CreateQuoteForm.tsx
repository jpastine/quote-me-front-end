import { useState } from "react";
import { QuoteFormData } from "../../types/forms";
import * as quoteService from '../../services/quoteService'
import { useNavigate } from "react-router";


type AddQuoteProps = {
  handleAddQuote: (quoteData: QuoteFormData) => void
}



const CreateQuoteForm = (props:AddQuoteProps): JSX.Element => {
  const navigate = useNavigate()
  
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
    try {
      await quoteService.createQuote(formData)
      navigate('/quotes')
    } catch (error) {
      throw error
    }
    
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
        <label>Author</label>
        <input type="text" name="author" onChange={handleInputChange}/>
        <button type="submit">Add Quote</button>
      </form>
    </main>
    </>
  ) 
  
} 

export default CreateQuoteForm
