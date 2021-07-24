import { useParams } from 'react-router-dom';

const BlogDetails = () => {

  const { id } = useParams();

  return(
    <div className="blog-details">
      <div class="container">
        {id}
      </div>
    </div>
  );
}

export default BlogDetails;
