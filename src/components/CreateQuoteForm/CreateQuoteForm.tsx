import { useState } from "react";
import { QuoteFormData } from "../../types/forms";
import { useNavigate } from "react-router";
import styles from './CreateQuoteForm.module.css'


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
      props.handleAddQuote(formData)
    } catch (error) {
      throw error
    }
  }
    
    


  return (
    <>
    <main>
      <form onSubmit={handleSubmit} className={styles.form}>
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
        <button type="submit" className={styles.button}>Add Quote</button>
      </form>
    </main>
    </>
  ) 
  
} 

export default CreateQuoteForm
