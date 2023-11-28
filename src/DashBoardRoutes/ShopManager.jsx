import { FaTrashAlt } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";

import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ShopManager = () => {
  const allProducts = useLoaderData();
  // console.log(allProducts);
  const handleDelete = (id) => {
      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
      }).then((result) => {
          if (result.isConfirmed) {

            fetch(`http://localhost:5000/products/${id}`, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              if (data.deletedCount > 0) {
                          Swal.fire({
                              title: "Deleted!",
                              text: "Your file has been deleted.",
                              icon: "success"
                          });
                      }
                  })
          }
      });

  }

  return (
    <div>
      <div>
        <div className="flex flex-col items-center border-2 border-sky-400 p-4">
          {allProducts.length === 0 ? (
            <>
              <p className="text-lg font-bold mb-4">No products added yet.</p>
              <Link to={'/dashboard/products'}><button className="btn btn-primary font-bold">Add a Product</button></Link>

            </>
          ) : (
            <div className="flex justify-between w-full">
              <h2 className="text-xl font-bold">Total {allProducts?.length} products added</h2>
              <Link to={'/dashboard/products'}><button className="btn btn-primary font-bold">Add a Product</button></Link>
            </div>
          )}
        </div>
      </div>
      <div>

        <div className="overflow-x-auto">
          <table className="table  w-full">
            <thead className="text-xl font-semibold text-rose-700">
              <tr>
                <th>
                  #
                </th>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Sale Count</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                allProducts.map((products, index) => <tr key={products._id}>
                  <th>
                    {index + 1}
                  </th>
                  <td>
                    <div className="flex item-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={products.imageUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {products.name}
                  </td>
                  <td>{products.quantity}</td>
                  <td>{products.saleCount}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(products._id)}
                      className="btn btn-ghost btn-lg"> Delete
                      <FaTrashAlt className="text-red-600"></FaTrashAlt>
                    </button>
                    <Link to={`/dashboard/update/${products._id}`}> <button
                      className="btn btn-ghost btn-lg"> Update
                      <GrUpdate className="text-red-600"></GrUpdate>
                    </button></Link>
                  </th>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShopManager;