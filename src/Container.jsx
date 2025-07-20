import React from "react";
import "./index.scss";
function Container({ quotes, authors, newquote , color }) {
    return(
        <>
        <div className="container" id="quote-box" style={{backgroundColor:"#fff",color:color}}>
            <p id="text" ><em>"{quotes}"</em></p>
            <p id="author">-{authors}</p>
            <a className="buttons" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quotes)} - ${encodeURIComponent(authors)}`} id="tweet-quote" target="_blank" rel="noopener noreferrer" style={{backgroundColor:color,color:"#fff"}}><i className="bi bi-twitter-x"></i></a>
            <button className="buttons" id="new-quote" onClick={newquote}style={{backgroundColor:color,color:"#fff"}}>New Quote</button>
        </div>
        </>
    )
}

export default Container;