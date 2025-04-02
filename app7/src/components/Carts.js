import { useEffect, useState } from "react";

function Carts() {

    let [Carts, setMyCarts] = useState([]);
     let APIURL = "https://dummyjson.com/carts";

    // Call API
    useEffect(() => {
        fetch(APIURL).then((response) => {
            response.json().then((result) => {
                console.log(result);
                setMyCarts(result.carts);
                //console.log(myCarts);
            })
        });
    });

    return <>
      <h1>carts</h1>
     <table className="table table-hover table-striped">
       <thead className="table-dark">
             <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>DiscountPercentage</th>
                <th>DiscountedTotal</th>
                <th>Thumbnail</th>
             </tr>
       </thead>

                {
                    <tbody>
                    {Carts.map((cart, index) => (
                      <tr key={index}>
                        <td>{cart.id}</td>
                        <td>
                          {cart.products?.map((product) => product.title)}
                        </td>
                        <td>
                          {cart.products?.map((product) => product.price)}
                        </td>
                        <td>
                          {cart.products?.map((product) => product.quantity)}
                        </td>
                        <td>{cart.total}</td>
                        <td>{cart.discountPercentage}</td>
                        <td>{cart.discountedTotal}</td>
                        <td>
                          {cart.products?.map((product) => (
                            <img
                              src={product.thumbnail}
                              style={{ width: "150px", height: "150px" }}
                              alt={`Thumbnail of ${product.title || "Unnamed Product"}`}
                            />
                          )) || "No images available"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  
                }
            
     </table>
    </>
}

export default Carts;