import React, { useState, useEffect } from 'react';
import './App.css';

// CODE TO TEST IF DATA-RENDERING WORKS - ORIGINAL CODE BELOW (COMMENTED OUT)
// Live test app: https://twilight-zone-api-react-test.netlify.app/

const App = () => {
  const [episode, setEpisodes] = useState([]);
  const url = `https://the-twilight-zone-api.vercel.app/episodes`;

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
    <div
      style={{
        backgroundColor: '#f4f4f4',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
    >
      {episode.map((item) => {
        return (
          <div key={item.id} style={{ margin: '40px' }}>
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
                href={item.wikipedia}
                rel='noopener noreferrer'
                target='_blank'
              >
                Wikipedia
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
          </div>
        );
      })}
    </div>
  );
};

export default App;
