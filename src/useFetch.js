import { useState, useEffect } from "react"
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    

    useEffect( ()=>{
        const abortCont = new AbortController()
        console.log(abortCont);
        fetch(url, {signal: abortCont.signal})
        .then(res=>{
            if (!res.ok) {
                throw Error('could not fetch the data for this resource')
            }
            console.log(res);
            return res.json()
        })
        .then(data=>{
            setIsPending(false)
            setData(data)
            console.log(data);
        })
        .catch(err=>{
            if (err.name === 'AbortError') {
                console.log('Fetch Aborted');
            }else{
                console.log(err.message);
            setError(err.message)
            setIsPending(false) 
            }
            
            
        })
        return ()=>abortCont.abort()

    },[url])
    
    return {data, isPending, error};
}
 
export default useFetch;