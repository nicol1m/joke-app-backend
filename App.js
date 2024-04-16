import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [category, setCategory] = useState('');
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    try {
        const response = await axios.post('http://localhost:5001/jokes', { category });
        console.log('Response:', response.data);  // Log the response data
        setJoke(response.data.joke);
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
};

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleClick = () => {
    fetchJoke();
  };

  return (
    <div className="App">
      <h1>Joke App</h1>
      <select onChange={handleChange}>
        <option value="">Select Category</option>
        <option value="cats">Cats</option>
        <option value="dogs">Dogs</option>
        <option value="hamsters">Hamsters</option>
      </select>
      <br />
      <button onClick={handleClick}>Get Joke</button>
      <br />
      {joke && (
        <>
          <p>{joke}</p>
          <button onClick={() => setJoke('')}>Get Another Joke</button>
        </>
      )}
    </div>
  );
}

export default App;
