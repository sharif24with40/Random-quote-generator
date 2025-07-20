import Container from './Container'
import { useState,useEffect } from 'react'
import "./index.scss"
import randomColor from 'randomcolor'
function App() {

const [quote,setQuote] = useState({content:'',author:''});

const [bgColor,setBgColor] = useState("#0f0f0f");

useEffect(() => {
  fetchQuote();
}, []);

const fetchQuote = async () => {
  try{
  const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
    headers: {
      'X-Api-Key': import.meta.env.VITE_API_KEY
    }
  });
  const data = await response.json();

  setQuote({ content: data[0].quote, author: data[0].author });
  const newColor = randomColor({ luminosity: 'bright' }); 
  setBgColor(newColor);
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
}

  return (
    <div className="wrapper" style={{ backgroundColor: bgColor }}>
      <Container quotes={quote.content} authors={quote.author} newquote={fetchQuote} color={bgColor} />
    </div>
  )
}

export default App
