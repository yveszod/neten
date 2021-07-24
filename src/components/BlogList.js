import { Link } from 'react-router-dom';

const BlogList = ({blogs}) => {

    return (
        <div className="blog-list">
            {blogs.map((blog)=> (
                <div className="blog-box" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                  <h2>{blog.title}</h2>
                </Link>
                  <div className="author">{blog.author}</div>
                  <div className="desc">{blog.body}</div>
                </div>
            ))}
        </div>
     );
}

export default BlogList;
