function App() {
  const [quotes, setquotes] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState([]);
  const [color, setColor] = React.useState('black')
  
  React.useEffect(() => {
      async function fetchData(){
      const responce = await fetch("https://type.fit/api/quotes")
      const data = await responce.json();
  
      setquotes(data);
      let randomIndex = Math.floor(Math.random() * data.length);
       setRandomQuote(data[randomIndex])
    }
    console.log(fetchData());
  
  }, [])
  
  const getNewQuote = () => {
    const colors = [
      "#1DC0C3", "#1A6136", '#2D960D', '#691B9D', "#A23F4F", '#1F1B9E', '#1A4061', '#8B960E', '#960E0E'
   ]
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomColorIndex = Math.floor(Math.random() * colors.length);
       setRandomQuote(quotes[randomIndex])
       setColor(colors[randomColorIndex])
  }
  
    return (
  <div className="dis"style={{backgroundColor: color, minHeight: "100vh", paddingTop: "50px"}}>
      
     
          <div  id="quote-box" className="card" >           
                <div className='card-body' >
                  {randomQuote ? (
                    <>
                    <h3 id="text" className="card-title" style={{color: color}}>&quot;{randomQuote.text}&quot;</h3>
                    <h5  id="author" className='card-text' style={{color: color}}>- {randomQuote.author || "No author"}</h5>
                    </>
                  ) : (
                    <h2>Loading</h2>
                  )}
                  <div className="row">
                    <button id="new-quote" style={{backgroundColor: color, marginRight: "135px",}} className="btn ml-2 newQuote"onClick={getNewQuote}><h7 style={{color: "#FFF"}}>New Quote</h7></button>
                    <a href="https://twitter.com" className="btn twitter" style={{backgroundColor: color, border: "2px",  marginRight: '5px'}}>
                     <h7 style={{color: "#FFF"}}>Twitter</h7>
                    </a>
                    <a href="https://www.tumblr.com/login" className="btn tumblr" style={{backgroundColor: color, border: 0}}><h7 style={{color: "#FFF"}} >Tumblr</h7></a>
  
                  </div>
                </div>
            </div>
                
  </div>

        
    );
  }
  
   ReactDOM.render(<App/>, document.getElementById('root'));