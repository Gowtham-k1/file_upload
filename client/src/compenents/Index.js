import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Index(){
    
  
    

    const handlesubmit = (event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers:{"enctype":"multipart/form-data"}};

        axios.post('http://localhost:3002/Addfile',datastring,config)
        .then(function(response){
            if(response.data.status === 'error'){
                alert('Error');
                window.location.reload();
            }
            else if(response.data.status === 'uploaded'){
                alert('File Uploaded');
                window.location.reload();
            }
            else{
                alert('Contact Admin');
                window.location.reload();
            }
        })
        .catch(function(error){
            alert(error);
            window.location.reload();
        })

    }

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                <form onSubmit={handlesubmit}>
                <div className="table-responsive">
                    <table width="100%" className="table table-bordered">
                        <thead>
                            <tr>
                                <th colSpan={2} className="text-center">Image Upload</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>File to be upload</td>
                                <td>
                                    <input type="file" name="upload_file" id="upload_file" className="form-control"/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <button type="submit" name="data_submit" id="data_submit" value="submit"
                                    className="btn btn-primary">
                                        <span>Upload</span>
                                    </button>
                                </td>
                            </tr>
                        
                                <Link to='/viewfile' className='btn bg-primary'>viewfile</Link>
                            
                        </tbody>
                    </table>
                </div>
                </form>
                </div>
                
                </div>
                
                </div>
                
            
           
        </>
    )
}