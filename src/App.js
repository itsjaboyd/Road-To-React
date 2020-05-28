import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './App.css';

function App() {
  const welcome = {
    greeting: 'Hey',
    title: 'React',
  };
  const fruits = [
    'apple',
    'orange',
    'banana',
    'kiwi',
    'apricot',
    'grapefruit',
  ];
  const list = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID:1,
    },
  ];

  return (
    <Container>
      <h1 className="display-2 text-center mb-5">{welcome.greeting} {welcome.title}</h1>
      <Row>
        <Col>
          <h2>Fruits!</h2>
          {fruits.map((fruit) => <p className="border-bottom p-2 lead">{fruit}</p>)}
        </Col>
        <Col>
          {list.map((item) => {
            return (
              <div key={item.objectID} className="p-4 shadow mb-4">
                <h2 className="text-center">{item.title}</h2>
                <Row>
                  <Col><p>URL</p></Col>
                  <Col><a href={item.url}>{item.url}</a></Col>
                </Row>
                <Row>
                  <Col><p>Author</p></Col>
                  <Col>{item.author}</Col>
                </Row>
                <Row>
                  <Col><p>Points</p></Col>
                  <Col>{item.points}</Col>
                </Row>
                <Row>
                  <Col><p>Comments</p></Col>
                  <Col>{item.num_comments}</Col>
                </Row>
              </div>
            );
          })}
        </Col>
      </Row>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text"></input>
    </Container>
  );
}

export default App;
