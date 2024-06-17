import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Create = () => {
    const [title, setTitle] = useState('')
    const[description, setDescription] = useState('')
    const[price, setPrice] = useState('')
    const history = useHistory()
    const[isPending, setIsPending] = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setIsPending(true)
        const cart = {title, description, price}
        fetch('http://localhost:8000/cart',{
            method:"POST",
            headers:{"content-Type": "application/json"},
            body: JSON.stringify(cart)
        }).then()

        history.push("/")

       
    }
    return ( 
        <div className="create-blog">
            <form onSubmit={handleSubmit}>
                <label>Item Title</label>
                <input 
                type="text" 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label >Item Description</label>
                <textarea 
                required
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                > 
                </textarea>
                <label>cart price</label>
                <input type="number"
                required
                value= {price}
                onChange={(e)=>setPrice(e.target.value)}
                />
                {!isPending && <button className="btn btn-success">Add blog</button>}
                {isPending && <button className="btn btn-success">Adding blog</button>}
            </form>
        </div>
    );
}
 
export default Create;