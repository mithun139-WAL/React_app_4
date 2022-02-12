import { useEffect } from 'react';
import axios from 'axios';

const AllProducts = () => {
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            document.querySelector("tbody").innerHTML = "";
            res.data.forEach(function (product) {
                document.querySelector("tbody").innerHTML += `
                    <tr>
                        <td>${product.id}</td>
                        <td>${product.price}</td>
                        <td>${product.description}</td>
                    </tr>`;
            })
        })
    }, []);

    return (
        <div className='p-3 m-3'>
            <h1 className="text-center p-5 text-muted">All Products</h1>
            <div>
                <table className='AllProduct border border-primary text-center'>
                    <thead className='m-2 bg-primary'>
                        <tr>
                            <th className='border border-secondary'>Product_ID</th>
                            <th>Price</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody className='border border-primary text-black-70'>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default AllProducts;