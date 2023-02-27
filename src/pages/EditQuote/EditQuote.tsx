import { useState } from "react";
import { QuoteFormData } from "../../types/forms";
import { useNavigate } from "react-router";
import { Quote } from "../../types/models";
import * as quoteService from '../../services/quoteService'


type AddQuoteProps = {
  handleEditQuote: (quoteData: QuoteFormData) => void
}



const EditQuoteForm = (props:AddQuoteProps): JSX.Element => {
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
      props.handleEditQuote(formData)
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
          Edit quote
        </label>
        <textarea 
          name="quote" 
          id="quote"
          onChange={handleTextAreaChange}
          // value={formData.quote}
          >

        </textarea>
        <label>Author</label>
        <input type="text" name="author" onChange={handleInputChange}/>
        <button type="submit">Save Quote</button>
      </form>
    </main>
    </>
  ) 
  
} 

export default EditQuoteForm
