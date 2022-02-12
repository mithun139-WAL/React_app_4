import axios from "axios";
import { useEffect } from "react";

const Ecommerce = (props) => {
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${props.pid}`)
            .then((res) => {
                document.getElementById("product_id").textContent = `Product id: ${res.data.id}`;
                document.getElementById("product_title").textContent = `${res.data.title}`
                document.getElementById("product_price").textContent = `M.R.P :₹ ${res.data.price}`
                document.getElementById("product_description").textContent = `${res.data.description}`
                document.getElementById("product_category").textContent = `${res.data.category}`
                document.getElementById("product_img").src = `${res.data.image}`
                document.getElementById("product_rating").innerHTML = `${res.data.rating.rate}/5`
                document.getElementById("rating_count").textContent = `${res.data.rating.count} ratings`

            })
    }, [props.pid]);
    return (
        <div className="mx-auto">
            <h1>Ecommerce</h1>
            <div className="card  mx-auto p-3">
                <div className="row">
                    <div className="col-4">
                        <img id="product_img" className="p-3 w-50"></img>
                    </div>
                    <div className="col-6">
                        <div id="product_id"> </div>
                        <h3 id="product_title"></h3>
                        <div id="product_description"></div>
                        <div id="product_category" className="text-muted"></div>
                        <ul className="list-inline d-flex">
                            <li className="p-2"><small id="product_rating"></small></li>
                            <li className="p-2"><small id="rating_count"></small></li>
                        </ul>
                        <div id="product_price"></div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Ecommerce;