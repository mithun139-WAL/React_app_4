import { useState, useEffect } from "react";
import axios from "axios";

const Categories = () => {
    let [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/categories").then((res) => {
            setCategories(res.data);
        })
    }, []);
    return (
        <div>
           <ul className="list-inline d-flex">
           {
                categories.map((val, index) => {
                    return <li className="p-3 text-primary">{val}</li>
                })
            }
           </ul>
        </div>
    );
}
export default Categories;