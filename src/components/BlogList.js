const BlogList = (props) => {

    const blogs = props.blogs;

    return ( 
        <div className="blog-list">
            {blogs.map((blog)=> (
                <div className="blog-box" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <div className="authot">{blog.author}</div>
                    <div className="desc">{blog.body}</div>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;