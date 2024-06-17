import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Notfound = () => {
    return ( 
        <div className="notfound text-center mt-4">
            <h4>
                The page you're looking for does not exist
            </h4>
            <Link to="/">
                Back to HomePage
            </Link>
        </div>
    );
}
export default Notfound;