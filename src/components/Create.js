import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState(2);
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
    }).then( () => {
      console.log('Added');
      setIsPending(false);
      setTitle('');
      setBody('');
      setAuthor(1);
      history.push('/');
    })
  }

  return(
    <div>
      <div className="container">
        <form onSubmit={ handleSubmit }>
          <label>Blog Title</label>
          <input
            type="text"
            required
            value={title}
            onChange={ (e) => setTitle(e.target.value) }
          />
          <label>Blog Body</label>
          <textarea
            required
            value={body}
            onChange = { (e) => setBody( e.target.value ) }
          >
          </textarea>
          <label>Blog Author</label>
          <select
            value={author}
            onChange={ (e) => setAuthor( e.target.value ) }
          >
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          { !isPending && <button className="submit">Add Blog</button> }
          { isPending && <button disabled>Adding Blog...</button> }
        </form>
      </div>
    </div>
  );
}

export default Create;
