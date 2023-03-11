import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useState,useEffect} from 'react';

export default function Viewfile(){
    
    const [viewphoto,setViewphoto] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:3002/Viewfile/')
        .then(response=>response.json())
        .then(json=>setViewphoto(json));
    },[]);
    
    return(
        <>
     <div className='container-fluid'>
    <div className="row mt-3">
    <div className="col-lg-3">&nbsp;</div>
    <div className="col-lg-6">
    <div className="table-responsive">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>File Name</th>
                        <th>Photo</th>
                        <th>Date & Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        viewphoto.map((v,i)=>(
                            <tr>
                                <td>{v.file_name}</td>
                                <td><img src={v.file_object+v.file_name} className="img-fluid"/></td>
                                <td>{v.upload}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
    <div className="col-lg-3">&nbsp;</div>
</div>
</div>
</>
)
}