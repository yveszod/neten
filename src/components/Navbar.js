const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="container">
                <div className="flex">
                    <h3>NetEn</h3>
                    <div className="links">
                        <a href="/">Home</a>
                        <a href="create">Create</a>
                    </div>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;