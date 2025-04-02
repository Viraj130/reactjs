MyCarts.map((cart,product, index)   => {
                        <tr key={index}>
                            <td>{cart.id}</td>  
                            <td>{cart.products.map((product) => product.title)}</td>
                            <td>{cart.product.map((product)  => product.price)}</td>
                            <td>{cart.products.map((product) => product.quantity)}</td>
                            <td>{cart.total}</td>
                            <td>{cart.discountPercentage}</td>
                            <td>{cart.discountedTotal}</td>
                            <td>{cart.products.map((product) => 
                             <img src={product.thumbnail} className="w=50 h-50" alt="product    "></img>
                            )}</td>
                        </tr>