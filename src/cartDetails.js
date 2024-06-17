import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const CartDetails = () => {
    const {id} = useParams()
    const {data: cart, isPending, error} = useFetch('http://localhost:8000/cart/' + id)
    const history = useHistory()
    const handleClick = (e) =>{
        e.preventDefault()
        fetch('http://localhost:8000/cart/' + id,{
            method:"DELETE"
        })
        history.push("/")
    }
    return ( 
        <div className="cart-details text-center mt-3">
            {isPending && <div>Loading ...</div>}
            {error && <div>{error}</div>}
            {cart && (<article>
                    <h3>{cart.title}</h3>
                        <p>{cart.price}</p>
                    <p>{cart.description}</p>                
            </article>)}
            <button className="btn btn-danger" onClick={handleClick}>Delete</button>
        </div>
     );
}
 
export default CartDetails;