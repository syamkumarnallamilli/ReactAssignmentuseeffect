import logo from './logo.svg';
import './App.css';
import WeatherWidget from './weatherwidget';
import CardWithButton from './cardbutton'
import PopularMovies from './components/Popular';

function App() {
  return (
    <div className="App">
     {/* <WeatherWidget/> 
     <CardWithButton/> */}
     <PopularMovies/>

    </div>
  );
}

export default App;
// ExampleComponent.js

// import React, { useState } from 'react';
// import axios from 'axios';

// const ExampleComponent = () => {
//   const [message, setMessage] = useState('');  // State to store the backend response

//   const handleClick = () => {
//     axios.get('/api/hello')  // This will be proxied to http://localhost:8080/api/hello
//       .then(response => {
//         setMessage(response.data);  // Set the response data as the message
//       })
//       .catch(error => {
//         console.error('There was an error!', error);
//       });
//   };

//   return (
//     <div>
//       <h1>React and Spring Boot Integration</h1>
//       <button onClick={handleClick}>Test</button>
//       {message && <p>{message}</p>}  {/* Display the message if it exists */}
//     </div>
//   );
// }

// export default ExampleComponent;
