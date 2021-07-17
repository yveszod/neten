const BlogList = ({blogs, handleDelete}) => {

    return (
        <div className="blog-list">
            {blogs.map((blog)=> (
                <div className="blog-box" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <div className="authot">{blog.author}</div>
                    <div className="desc">{blog.body}</div>
                    <button onClick={ () => handleDelete( blog.id ) }>Delete</button>
                </div>
            ))}
        </div>
     );
}

export default BlogList;
