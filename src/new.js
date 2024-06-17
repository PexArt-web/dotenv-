import Latestlist from "./newlist";
import useFetch from "./useFetch";

const Testknowledge = () => {
    const{data:cart, isPending , error} = useFetch('http://localhost:8000/cart')
    
    return ( 
        <div className="listingItems">
            {isPending && <div className="text-center mt-3 mb-3">Loading...</div>}
            {error && <div className="text-center mt-3 mb-3">{error}</div>}
            {cart && <Latestlist cart = {cart} title='All item Carts'/>}
            {/* <Latestlist cart = {cart.filter((prduct)=> prduct.title !== 'necklace') } title={'Other Items'} handleDelete={handleDelete}/> */}
        </div>
  
     );
}
 
export default Testknowledge;