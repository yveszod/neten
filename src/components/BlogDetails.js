import { useParams } from 'react-router-dom';
import useFetch from '../useFetch';
import { useHistory } from 'react-router-dom';

const BlogDetails = () => {

  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/'+id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/'+blog.id, {
      method: 'DELETE'
    }).then( () => {
      history.push('/');
    } )
  }

  return(
    <div className="blog-details">
      <div className="container">
        { isPending && <div>Loading...</div> }
        { error && <div>{ error }</div> }
        { blog && (
          <article>
            <h2>{ blog.title }</h2>
            <p>{ blog.body }</p>
            <button onClick={ handleClick }>Delete This Blog</button>
          </article>
        ) }
      </div>
    </div>
  );
}

export default BlogDetails;
