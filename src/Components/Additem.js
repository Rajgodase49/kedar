import React, { useState } from 'react';
import axios from 'axios';

const AddItem = () => {
    // const [name, setName] = useState('');
    // const [price, setPrice] = useState('');
     const [pr, setPr] = useState([]);

const echance=(e)=>{
setPr({...pr,[e.target.name]:e.target.value})
}

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            name: pr.name,
            price: pr.price,
            img: pr.img,
            elink:pr.elink
        };
        console.log(pr)

        axios.post('http://localhost:8080/api/items', newItem)
            .then(response => {
                console.log(response.data);
                // Reset form fields
                // setName('');
                // setPrice('');
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="container">
            <h1>Add Item Component</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name"   className="form-control" name='name' onChange={echance}  />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="number"  className="form-control" name='price'  onChange={echance} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Link:</label>
                    <input type="text"  className="form-control" name='elink'  onChange={echance} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">img:</label>
                    <input type="text"  className="form-control" name='img'  onChange={echance} />
                </div>
                <button type="submit" className="btn btn-primary">Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;
