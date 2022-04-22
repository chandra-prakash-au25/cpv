import 'bootstrap/dist/css/bootstrap.css';
import { useEffect,useState } from 'react';

const Bids=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("/api/bids/bid").then((result)=>{
            result.json().then((res)=>{
                console.log(res);
                setData(res)
            })
        })
    },[])

    return(
        <div className="card">
                    {data.length>0 && data.map((val)=>{
          <div className="card-body">
          <h5 className="card-title">{val._id}</h5>
          <p className="card-text">{val.username}</p>
          <p className="card-text">{val.email}</p>
          <p className="card-text">{val.acceptorder}</p>
          <p className="card-text">{val.createdAt}</p>
          <p className="card-text">{val.updatedAt}</p>
          <p className="card-text">{val._v}</p>
               
        </div>
        })}
                    
    

        </div>

    )
}
export default Bids;