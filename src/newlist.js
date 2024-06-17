import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Latestlist = ({ cart, title}) => {
  return (
    <div className="mt-3 list-item text-center text-danger mb-3">
      <Link to="/Create">
        <div className="create text-end text-decoration-underline pe-auto">
          Add a new blog
        </div>
      </Link>

      <h2>{`${title}!`}</h2>
      {cart.map((cartItem, index) => (
        <div className="listitem " key={cartItem.id}>
          <Link to={`/cart/${cartItem.title}/${cartItem.id}`}>
            <h4>{cartItem.title}</h4>
            <p>{cartItem.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Latestlist;
