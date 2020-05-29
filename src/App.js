import React from 'react';
import { Row, Col, Container, Jumbotron } from 'react-bootstrap';
import './App.css';


function App() {
  const [searchTerm, setSearchTerm] = React.useState('React');

  const stories = [
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
    {
      title: 'CNN',
      url: 'https://cnn.com',
      author: 'Random Man',
      num_comments: 875,
      points: 4.5,
      objectID: 2,
    },
    {
      title: 'YouTube',
      url: 'https://youtube.com',
      author: 'CEO of YouTube',
      num_comments: Infinity,
      points: 5,
      objectID: 3,
    },
  ];

  const searchedStories = stories.filter(story => {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });


  const handleSearch = event => {
    setSearchTerm(event.target.value);
  }

  return (
    <Container>
      <Jumbotron>
        <h1 className="display-2 text-center">Hey React!</h1>
      </Jumbotron>
      <Search onSearch={handleSearch} searchTerm={searchTerm}/>
      <List list={searchedStories} />
    </Container>
  );
}

const List = (props) =>
  props.list.map(item => (
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
));

const Search = (props) => {
  return (
    <div className="text-center p-4">
      <form className="form-inline">
        <div className="form-group">
          <label htmlFor="search" className="font-weight-bold mr-3">Search: </label>
          <input className="form-control" value={props.searchTerm} id="search" type="text" onChange={props.onSearch} />
        </div>
      </form>
    </div>
  );
}
export default App;
