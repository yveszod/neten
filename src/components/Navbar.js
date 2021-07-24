import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="flex">
                    <h3 className="logo">NetEn</h3>
                    <div className="links">
                        <Link to="/">Home</Link>
                        <Link to="/create">Create</Link>
                    </div>
                </div>
            </div>
        </nav>
     );
}

export default Navbar;
