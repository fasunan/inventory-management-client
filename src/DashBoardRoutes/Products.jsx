import Swal from "sweetalert2";

import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useSingleUser from "../hooks/useSingleUser";

const Products = () => {
    const userInfo = useLoaderData();
    const singleUser= useSingleUser()
    console.log(singleUser, "single user");
    //TODO: single user lagbe 

    const shopId= userInfo[0].shopId;
    const shopName= userInfo[0].shopName;
    const userEmail= userInfo[0].email;

    console.log(shopId, shopName, userEmail)



    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KAY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;



    const handleAddProducts = async (e) => {
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

        // Use Axios to upload the image to ImgBB
        const response = await axios.post(image_hosting_api, formData);
        const imageUrl = response.data.data.url;

        const productsInfo = {
            name,
            imageUrl,
            cost,
            quantity,
            discount,
            profit,
            description,
            location,
            shopId,
            shopName,
            userEmail,
            sellingPrice: parseFloat(cost) + 0.075 * parseFloat(cost) + parseFloat(profit),
            addingDate: new Date(),
            saleCount: 0,
        };
        console.log(productsInfo);

        // send data to server

        fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(productsInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.result.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Products Added Successfully",
                        icon: "success",
                        confirmButtonText: "Done",
                    });
                } else {
                    // Handle other success scenarios or show a different message
                    console.error("Unexpected response format:", data);
                }
            })
            .catch((error) => {
                console.error("Error adding product:", error);
                Swal.fire({
                    title: "Error!",
                    text: "Product added limit reached. plz go to subscription page for increase limit.",
                    icon: "error",
                    confirmButtonText: "OK",
                    footer: '<a href="/dashboard/subscription" style="color: #0ca8e6; font-size: 1.5em;">Go to Subscription Page</a>',
                    customClass: {
                        content: 'text-color-sky-500',
                    },
                });
            });

    }
    return (
        <div className="p-10">
            <Helmet>
                <title>Fashion Store || Add Product</title>
            </Helmet>
            <div>
                <h1 className="text-3xl font-bold text-center mb-8">Add A Product</h1>
            </div>
            <div>
                <div className=" ">
                    <form onSubmit={handleAddProducts}>
                        {/*row */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pl-10">
                            <div>
                                <h2 className="text-xl font-bold text-red-400 mb-2">Product Name</h2>
                                <input
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
                                    type="file"
                                    name="image"

                                />
                            </div>
                            <input
                                type="submit"
                                value="Add Product"
                                className="btn mt-6 w-60  bg-indigo-200 text-sky-700"
                            />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Products;