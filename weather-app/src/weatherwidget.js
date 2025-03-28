// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Box, TextField, Typography } from '@mui/material';

// function WeatherWidget() {
//   const [city, setCity] = useState(null);
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchWeather = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const apiKey = 'e1e65d12b7eb964c116162369dc60e02';
//         const response = await axios.get(
//           `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
//         );
//         setWeather(response.data);
//       } catch (error) {
//         setError('Error fetching weather data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWeather();
//   }, [city]);

//   const handleCityChange = (event) => {
//     setCity(event.target.value);
//   };

//   const getCurrentDate = () => {
//     const now = new Date();
//     return now.toLocaleDateString('en-US', {
//       month: 'long',
//       day: 'numeric',
//       year: 'numeric',
//     });
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         padding: { xs: '10px', sm: '20px' }, // Responsive padding
//         maxWidth: '400px',
//         margin: '0 auto',
//       }}
//     >
//       <Box
//         component="form"
//         sx={{
//           width: '100%',
//           marginBottom: '20px',
//           marginTop:'70px'
//         }}
//       >
//         <TextField
//           fullWidth
//           variant="outlined"
//           value={city}
//           onChange={handleCityChange}
//           placeholder="Enter city..."
//           sx={{
//             fontSize: '16px', 
//           }}
//         />
//       </Box>

//       {loading && <Typography>Loading...</Typography>}
//       {error && <Typography color="error">{error}</Typography>}
//       {weather && !loading && !error && (
//         <Box
//           sx={{
//             textAlign: 'center',
//           }}
//         >
//           <Typography variant="h4" sx={{ fontSize: { xs: '20px', sm: '24px' } }}>
//             {weather.name}
//           </Typography>
//           <Typography sx={{ paddingTop: 1,fontSize:'30px'}}>{getCurrentDate()}</Typography>
//           <Typography sx={{ fontSize: { xs: '16px', sm: '18px' }, margin: '10px 0' }}>
//             {weather.weather[0].description}
//           </Typography>
//           <Box
//             component="img"
//             src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
//             alt="Weather icon"
//             sx={{ maxWidth: { xs: '80px', sm: '100px' }, height: 'auto' }}
//           />
//           <Typography sx={{ fontSize: { xs: '16px', sm: '18px' }, margin: '10px 0' }}>
//             Temperature: {weather.main.temp}°C
//           </Typography>
//           <Typography>
//             Wind Speed: {weather.wind.speed} m/s
//           </Typography>
//         </Box>
//       )}
//     </Box>
//   );
// }

// export default WeatherWidget;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Box, TextField, Typography } from '@mui/material';

// function WeatherWidget() {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (city) {
//       const fetchWeather = async () => {
//         setLoading(true);
//         setError(null);
//         try {
//           // const apiKey = 'e1e65d12b7eb964c116162369dc60e02';
//           const apiKey="https://localhost:8080/Accept";
//           const response = await axios.get(
//             `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
//           );
//           setWeather(response.data);
//         } catch (error) {
//           setError('Error fetching weather data');
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchWeather();
//     }
//   }, [city]);

//   useEffect(() => {
//     if (weather) {
//       const backgroundImageUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

//       document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
//       document.body.style.backgroundSize = 'cover';
//       document.body.style.backgroundPosition = 'center';
//       document.body.style.transition = 'background-image 0.5s ease-in-out'; // Optional smooth transition
//     } else {
//       document.body.style.backgroundImage = ''; // Reset background if no weather data
//     }

//     return () => {
//       document.body.style.backgroundImage = ''; // Cleanup background on component unmount
//     };
//   }, [weather]);

//   const handleCityChange = (event) => {
//     setCity(event.target.value);
//   };

//   const getCurrentDate = () => {
//     const now = new Date();
//     return now.toLocaleDateString('en-US', {
//       month: 'long',
//       day: 'numeric',
//       year: 'numeric',
//     });
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         padding: { xs: '10px', sm: '20px' },
//         maxWidth: '400px',
//         // margin: '0 auto',
//         marginLeft:65,
//         marginTop:20,
//         backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for the box
//         borderRadius: '10px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//       }}
//     >
//       <Box
//         component="form"
//         sx={{
//           width: '100%',
//           marginBottom: '20px',
//           marginTop: '70px',
//         }}
//       >
//         <TextField
//           fullWidth
//           variant="outlined"
//           value={city}
//           onChange={handleCityChange}
//           placeholder="Enter city..."
//           sx={{
//             fontSize: '16px',
//           }}
//         />
//       </Box>

//       {loading && <Typography>Loading...</Typography>}
//       {error && <Typography color="error">{error}</Typography>}
//       {weather && !loading && !error && (
//         <Box
//           sx={{
//             textAlign: 'center',
//           }}
//         >
//           <Typography variant="h4" sx={{ fontSize: { xs: '20px', sm: '24px' } }}>
//             {weather.name}
//           </Typography>
//           <Typography sx={{ paddingTop: 1, fontSize: '30px' }}>{getCurrentDate()}</Typography>
//           <Typography sx={{ fontSize: { xs: '16px', sm: '18px' }, margin: '10px 0' }}>
//             {weather.weather[0].description}
//           </Typography>
//           <Box
//             component="img"
//             src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
//             alt="Weather icon"
//             sx={{ maxWidth: { xs: '80px', sm: '100px' }, height: 'auto' }}
//           />
//           <Typography sx={{ fontSize: { xs: '16px', sm: '18px' }, margin: '10px 0' }}>
//             Temperature: {weather.main.temp}°C
//           </Typography>
//           <Typography>Wind Speed: {weather.wind.speed} m/s</Typography>
//         </Box>
//       )}
//     </Box>
//   );
// }

 //export default WeatherWidget;
import axios from 'axios';

axios.get('/hello')  // This will be proxied to http://localhost:8080/api/resource
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('There was an error!', error);
  });


