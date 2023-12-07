
import Swal from "sweetalert2";

import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Update = () => {
    const products = useLoaderData();
    const { name, description, cost, quantity, profit, discount, location, _id } = products;

    console.log(products);

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KAY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;



    const handleUpdateProducts = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const image = form.image;
        const description = form.description.value;
        const cost = form.cost.value;
        const quantity = form.quantity.value;
        const profit = form.profit.value;
        const discount = form.discount.value;
        const location = form.location.value;


        const formData = new FormData();
        formData.append('image', image.files[0]);

        const response = await axios.post(image_hosting_api, formData);

        const imageUrl = response.data.data.url;

        console.log(imageUrl)


        const updateInfo = {
            name,
            imageUrl,
            cost,
            quantity,
            discount,
            profit,
            description,
            location,

        };
        console.log(updateInfo);

        // send data to server
        fetch(`http://localhost:5000/products/${_id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateInfo)
    })
      .then(res => res.json())
      .then(data => {

        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Products Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          // Clear the form fields
          form.reset();
        
        }
      })

        // fetch(`http://localhost:5000/products/${_id}`, {
        //   method: "PATCH",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(updateInfo),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data);
        //     if (data.modifiedCount > 0) {
        //       Swal.fire({
        //         title: "Success!",
        //         text: "Shop Created Successfully",
        //         icon: "success",
        //         confirmButtonText: "Done",
        //       });
        //     }
        //   });

    }
    return (
        <div className="p-10">
            <Helmet>
                <title>Fashion Store || Update</title>
            </Helmet>
            <div>
                <h1 className="text-3xl font-bold text-center mb-8">Update  Product</h1>
            </div>
            <div>
                <div className=" ">
                    <form onSubmit={handleUpdateProducts}>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pl-10">
                            <div>
                                <h2 className="text-xl font-bold text-red-400 mb-2">Product Name</h2>
                                <input
                                    defaultValue={name}
                                    type="text"
                                    name="name"
                                    placeholder="Products Name"
                                    className="input input-bordered input-primary w-full max-w-xs"
                                />
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-red-400 mb-2">
                                    Product Quantity
                                </h2>
                                <input
                                    defaultValue={quantity}
                                    type="number"
                                    name="quantity"
                                    placeholder="Input Product Quantity"
                                    className="input input-bordered input-primary w-full max-w-xs"
                                />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-red-400 mb-2">
                                    Cost
                                </h2>
                                <input
                                    defaultValue={cost}
                                    type="number"
                                    name="cost"
                                    placeholder="Input Production Cost"
                                    className="input input-bordered input-primary w-full max-w-xs"
                                />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-red-400 mb-2">
                                    Profit Margin
                                </h2>
                                <input
                                    defaultValue={profit}
                                    type="text"
                                    name="profit"
                                    placeholder="Profit Margin"
                                    className="input input-bordered input-primary w-full max-w-xs"
                                />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-red-400 mb-2">
                                    Discount
                                </h2>
                                <input
                                    defaultValue={discount}
                                    type="text"
                                    name="discount"
                                    placeholder="Discount for this product"
                                    className="input input-bordered input-primary w-full max-w-xs"
                                />
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-red-400 mb-2">
                                    Short description
                                </h2>
                                <input
                                    defaultValue={description}
                                    type="text"
                                    name="description"
                                    required
                                    placeholder="Short description"
                                    className="input input-bordered input-primary w-full max-w-xs"
                                />
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-red-400 mb-2">Location</h2>
                                <input
                                    defaultValue={location}
                                    type="text"
                                    name="location"
                                    placeholder="Location"
                                    className="input input-bordered input-primary w-full max-w-xs"
                                />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-red-400 mb-2">
                                    Image
                                </h2>
                                <input
                                    // defaultValue={imageUrl}
                                    required
                                    type="file"
                                    name="image"

                                />
                            </div>
                            <input
                                type="submit"
                                value="Update Product"
                                className="btn mt-6 w-60  bg-indigo-200 text-sky-700"
                            />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Update;
