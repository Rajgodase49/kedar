import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Ecart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/items')
            .then(response => setData(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="container ">
            <h1>low priced mixed items by Raj Godase</h1>
            <div className='row'>
            {
                data.map((e,i)=>{
                    return(
                        <div className='col col-lg-4 card w-50' key={e._id}>
                            <div className='card-body'>
                            <div className='card-img-top'><img src={e.img} alt={e.name} className='w-25 h-25'/></div>
                            <div className='card-header'>{e.name}</div>
                            <div className='card-text'><span><h1>{e.price}</h1></span></div>
                            <div className='card-text w-100 h-25'><NavLink to={e.elink}>{e.elink}</NavLink></div>
                            </div>
                        </div>
                    )
                })
            }

            </div>











            {/* <table className="table table-striped">
                <thead>
                    <tr>
                        <th>img</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>LINK</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item._id} className=''>
                            <td><img src={item.img} className='w-25' alt={item.name}/></td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td><NavLink to={item.elink}>{item.elink}</NavLink></td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </div>
    );
};

export default Ecart;
