import React, { useState, useEffect } from 'react';

const RandomQuoteMachine = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const handleNewQuote = () => {
    fetchQuote();
  };

  const handleTweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    <div id="quote-box" className="container text-center my-5">
      <div id="text" className="mb-4 lead">{quote}</div>
      <div id="author" className="mb-4 font-italic">- {author}</div>
      <button id="new-quote" className="btn btn-primary mr-2" onClick={handleNewQuote}>New Quote</button>
      <a id="tweet-quote" className="btn btn-info" href="#" onClick={handleTweetQuote}>Tweet Quote</a>
    </div>
  );
};

export default RandomQuoteMachine;
