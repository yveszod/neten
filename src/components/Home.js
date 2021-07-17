import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    let initial_blogs = [
        { title: "Blog Entry #1", body: "Lorem Ipsum Dolor sit amet", author: "Yves", id: 1 },
        { title: "Blog Entry #2", body: "Lorem Ipsum Dolor sit amet", author: "Lukas", id: 2 },
        { title: "Blog Entry #3", body: "Lorem Ipsum Dolor sit amet", author: "Bastian", id: 3 },
    ]

    const [blogs, setBlogs] = useState(initial_blogs);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <div className="container">
                <BlogList blogs={blogs} handleDelete={handleDelete} />
            </div>
        </div>
     );
}

export default Home;
