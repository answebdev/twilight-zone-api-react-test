// WITH SEARCH FUNCTIONALITY
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import './App.css';

// CODE TO TEST IF DATA-RENDERING WORKS - ORIGINAL CODE BELOW (COMMENTED OUT)
// Live test app: https://twilight-zone-api-react-test.netlify.app/

// Search bar article: https://blog.logrocket.com/create-search-bar-react-from-scratch/

const App = () => {
  const [episode, setEpisodes] = useState([]);
  // const url = `https://the-twilight-zone-api.herokuapp.com/episodes`;
  const url = `https://the-twilight-zone-api.vercel.app/episodes`;

  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchEpisodes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function fetchEpisodes() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setEpisodes(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <>
      <div style={{ padding: '20px 0' }}>
        <h1
          style={{
            textAlign: 'center',
          }}
        >
          Welcome to The Twilight Zone API Test Page
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {/* <input
            placeholder='Search episodes'
            onChange={(event) => setQuery(event.target.value)}
          /> */}
          <TextField
            onChange={(event) => setQuery(event.target.value)}
            id='standard-basic'
            label='Search episodes'
            variant='standard'
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: '#f4f4f4',
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
      >
        {episode
          .filter((item) => {
            if (query === '') {
              return item;
            } else if (item.title.toLowerCase().includes(query.toLowerCase())) {
              return item;
            }
            // If none of the if or else-if condition matches
            return false;
          })
          .map((item) => (
            <div key={item.id} style={{ margin: '40px' }}>
              <Card variant='outlined'>
                <CardContent>
                  {/* {card} */}
                  <h3 style={{ width: '300px' }}>{item.title}</h3>
                  <div style={{ lineHeight: '2' }}>
                    <p style={{ width: '300px', lineHeight: '1.5' }}>
                      <strong>Season: </strong> {item.season}
                      <br />
                      <strong>Episode: </strong> {item.episode}
                      <br />
                      <strong>Directed by: </strong>
                      {item.directed_by}
                      <br />
                      <strong>Written by: </strong>
                      {item.written_by}
                      <br />
                      <strong>Original Air Date: </strong>
                      {item.air_date}
                    </p>
                  </div>
                  <img
                    style={{ width: '300px', height: '300px' }}
                    src={item.img}
                    alt={item.title}
                    title={item.title}
                  />
                  <p>
                    <a
                      style={{ textDecoration: 'none' }}
                      href={item.wikipedia}
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <Button
                        style={{ marginRight: '10px' }}
                        variant='outlined'
                      >
                        Wikipedia
                      </Button>
                    </a>
                    <a
                      style={{ textDecoration: 'none' }}
                      href={item.imdb}
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <Button variant='outlined'>IMDb</Button>
                    </a>
                  </p>
                  <div>
                    <div style={{ width: '300px' }}>
                      <p style={{ lineHeight: '1.5' }}>
                        <strong>Storyline: </strong>
                        {item.storyline}
                      </p>
                    </div>
                    <div style={{ lineHeight: '1.5' }}>
                      <strong>Cast</strong>
                    </div>
                    {item.cast.map((c, index) => (
                      <div key={index} style={{ lineHeight: '1.5' }}>
                        {c}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
      </div>
    </>
  );
};

export default App;
