import { useState, useRef } from "react";
import { QuoteFormData } from "../../types/forms";
import { useNavigate, useLocation } from "react-router";
import { Quote } from "../../types/models";
import * as quoteService from '../../services/quoteService'


type EditQuoteProps = {
  handleEditQuote: (quoteData: QuoteFormData) => void;
  quote: Quote;
}



const EditQuoteForm = (props:EditQuoteProps): JSX.Element => {
  const navigate = useNavigate()
  const { state } = useLocation()
  
  
  console.log(state);
  
  
  
  const [formData, setFormData] = useState<QuoteFormData>({
    quote: state.quote,
    author: state.author,
    id: state.id
})
  // console.log(QuoteFormData);
  

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
          value={formData.quote}
          >

        </textarea>
        <label>Author</label>
        <input type="text" name="author" value={formData.author} onChange={handleInputChange}/>
        <button type="submit">Save Quote</button>
      </form>
    </main>
    </>
  ) 
  
} 

export default EditQuoteForm
