import { useState } from "react";
import { MdShoppingCartCheckout } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const SalesProducts = () => {
    const SaleProduct=useLoaderData();
    const [searchProduct, setSearchProduct] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = () => {  
    const filteredProducts = SaleProduct.filter(
      (product) => product._id.includes(searchProduct)
    );
    setFilteredProducts(filteredProducts);
  };

  const handleAddToCart =(product)=>{
    
    fetch(`http://localhost:5000/carts/${product._id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product added to cart for checkOut",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
    
  }

    return (
        <div>
       <div className="flex gap-0">
        <input
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
          type="text"
          placeholder="Search Products by Id"
          className="input input-bordered input-success w-full max-w-xs rounded-r-none"
        />
        <button onClick={handleSearch} className="btn btn-success rounded-l-none">
          Search
        </button>
      </div>
      <div>
        

        <div className="overflow-x-auto">
          <table className="table  w-full">
            <thead className="text-base font-semibold text-blue-700">
              <tr>
                <th>
                  #
                </th>
                <th>Image</th>
                <th>Name</th>
                <th>Product Id</th>
                <th>Quantity</th>
                <th>Discount</th>
                <th>Selling Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {searchProduct
                ? filteredProducts.map((product, index) => (
                    <tr key={product._id}>
                      <th>{index + 1}</th>
                      <td>
                        <div className="flex item-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={product.imageUrl} alt="Product" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{product.name}</td>
                      <td>{product._id}</td>
                      <td>{product.quantity}</td>
                      <td>{product.discount}</td>
                      <td>{product.sellingPrice}</td>
                      <th>
                        <button className="btn btn-ghost btn-md">
                          Add For Check-out
                          <MdShoppingCartCheckout className="text-red-600" />
                        </button>
                      </th>
                    </tr>
                  ))
                : SaleProduct.map((product, index) => (
                    <tr key={product._id}>
                      <th>{index + 1}</th>
                      <td>
                        <div className="flex item-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={product.imageUrl} alt="Product" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{product.name}</td>
                      <td>{product._id}</td>
                      <td>{product.quantity}</td>
                      <td>{product.discount}</td>
                      <td>{product.sellingPrice}</td>
                      <th>
                        <button onClick={()=>handleAddToCart(product)} className="btn btn-ghost btn-md">
                          Add For Check-out
                          <MdShoppingCartCheckout className="text-red-600" />
                        </button>
                      </th>
                    </tr>
                  ))}
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default SalesProducts;