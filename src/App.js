import React from 'react';
import { Row, Col, Container, Jumbotron, Button } from 'react-bootstrap';
import './App.css';

const initialStories = [
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
  {
    title: 'Jasons Website',
    url: 'www.jaboyd.info',
    author: 'Jason Boyd',
    num_comments: 4,
    points: 3,
    objectID: 4,
  },
  {
    title: 'R. W.',
    url: 'https://www.robinwieruch.de/',
    author: 'Robin Wieruch',
    num_comments: 2857,
    points: 5,
    objectID: 5,
  },
  {
    title: 'Disney Plus',
    url: 'https://disneyplus.com',
    author: 'Disney Incorporated',
    num_comments: 8990,
    points: 5,
    objectID: 6,
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', '');
  const [stories, setStories] = React.useState(initialStories);


  const searchedStories = stories.filter(story => {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleRemoveStory = (item) => {
    const newStoreies = stories.filter(
      story => item.objectID !== story.objectID
    );

    setStories(newStoreies);
  }
  const handleSearch = event => {
    setSearchTerm(event.target.value);
  }

  return (
    <Container>
      <Jumbotron>
        <h1 className="display-2 text-center">Hey React!</h1>
      </Jumbotron>
      <Search onSearch={handleSearch} searchTerm={searchTerm}/>
      <List list={searchedStories} onRemoveItem={handleRemoveStory} />
    </Container>
  );
}

const List = ({ list, onRemoveItem }) =>
  list.map(item => <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />);

const Item = ({ item, onRemoveItem }) => {
  return (
    <div className="p-4 shadow mb-4">
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
      <div className="text-center">
        <Button variant="outline-info" onClick={() => onRemoveItem(item)}>Remove</Button>
      </div>
    </div>
  );
};

const Search = ({ searchTerm, onSearch }) => (
  <div className="text-center p-4">
    <form className="form-inline">
      <div className="form-group">
        <label htmlFor="search" className="font-weight-bold mr-3">Search: </label>
        <input className="form-control" value={searchTerm} id="search" type="text" onChange={onSearch} />
      </div>
    </form>
    <p className="lead">{searchTerm}</p>
  </div>
);

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};


export default App;
