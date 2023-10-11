import {Children, useState, useCallback, useEffect} from 'react';
import axios from 'axios';

import './SimpleFetchExample.css';
import Card from '../components/Card';


export default function SimpleFetchExample() {
  let [page, setPage] = useState('create');
  return (
    <>
      <nav>
        Navigation:
        <input type="button" value="Create Card" onClick={() => setPage('create')}/>
        <input type="button" value="Read Cards" onClick={() => setPage('read')}/>
      </nav>
      {page === 'create' && <CreateCard />}
      {page === 'read' && <ReadCards />}
    </>
  );
}

function ReadCards() {
  let [cards, setCards] = useState([]);
  let [loading, setLoading] = useState(false);

  const handleGetCards = useCallback(function() {
    setLoading(true);
    axios.get('/api/cards/cards')
      .then(response => {
        console.log({response});
        setCards(response.data.cards);
        setLoading(false);
      })
      .catch(error => {
        console.error({error});
      });
  }, []);

  useEffect(() => {
    handleGetCards();
  }, []);

  console.log({cards});
  return (
    <div className="ReadCards">
      <h3>Read Cards</h3>

      <p><input type="button" value="Refresh List" onClick={() => handleGetCards()} /></p>

      {loading && "LOADING..."}
      {!loading && cards.map(c =>
        <Card key={c.id}>
          <span>{c.title}</span>
          <div>{c.body}</div>
        </Card>
      )}
    </div>
  );
}


function CreateCard() {
  let [title, setTitle] = useState('');
  let [body, setBody] = useState('');
  let submitDisabled = !title || !body;

  const handlePostCard = useCallback(function() {
    let [thisTitle, thisBody] = [title, body];
    setTitle('');
    setBody('');
    axios.post('/api/cards/card', {title: thisTitle, body: thisBody})
      .then(response => {
        console.log({response});
      })
      .catch(error => {
        console.error({error});
      });

  }, [title, body]);

  const handleGetCardById = useCallback(function() {
    axios.get('/api/cards/card/1')
      .then(response => {
        console.log({response});
      })
      .catch(error => {
        console.error({error});
      });

  }, []);


  return (
    <div className="SimpleFetchExample">
      <h3>Create a Card</h3>

      <div>
        <label>Title</label>
        <input placeholder="Card Title" value={title} onChange={e => setTitle(e.target.value)}/>
      </div>
      <div>
        <label>Body</label>
        <textarea placeholder="Card Body" value={body} onChange={e => setBody(e.target.value)}></textarea>
      </div>
      <p><input type="button" value="Submit" disabled={submitDisabled} onClick={() => handlePostCard()} /></p>

      <h3>Preview</h3>

      <Card>
        <span>{title}</span>
        <div>{body}</div>
      </Card>
    </div>
  );
}

function _Card({children}) {
  let [title, body, footer] =  Children.toArray(children);
  const defaultTitle = 'Missing Title';
  const defaultBody = 'Missing Body';
  const defaultFooter = 'Missing Footer';
  return (
    <div className="Card">
      <h1>{title || defaultTitle}</h1>
      <div className="body">
        {body || defaultBody}
      </div>
      <hr />
      {footer || defaultFooter}
    </div>
  );
}
