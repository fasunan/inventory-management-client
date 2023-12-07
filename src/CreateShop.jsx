
import Swal from "sweetalert2";

import useAuth from "./hooks/useAuth";

const CreateShop = () => {
  const { user } = useAuth();
  const ownerName = user?.displayName;
  const ownerEmail = user?.email;
  const shopId= user?.shopId;

  const productLimit = 3;

  const handleCreateShop = (e) => {
    e.preventDefault();
    const form = e.target;
    const shopName = form.shopName.value;
    const logo = form.logo.value;
    const description = form.description.value;
    const location = form.location.value;

    const ShopInfo = {
      productLimit,
      shopName,
      logo,
      description,
      ownerEmail,
      ownerName,
      location
    };
    console.log(ShopInfo);

    // send data to server
    fetch("http://localhost:5000/shop", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ShopInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          // const shopId = data.insertedId;
          
        }
        
      });

      // update info of logged user
      const role = 'manager'

      const userUpdateInfo = {
        shopName,
        logo,
        role,
        shopId
      }
      fetch(`http://localhost:5000/updateUser/${ownerEmail}`, {
            method: "PATCH",
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(userUpdateInfo)
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);

              if (data.modifiedCount > 0) {

                Swal.fire({
                  title: "Success!",
                  text: "Shop Created Successfully",
                  icon: "success",
                  confirmButtonText: "Done",
                });
                // Clear the form fields
                form.reset();
              }
            })

  };
  return (
    <div className="p-20">
      <div className="m-10 ">
        <h1 className="text-3xl font-bold text-center">Create Shop</h1>
        <p className="text-lg text-center">
          <p>Name of Shop-Owner: {ownerName}</p>
          <p>Email of Shop-Owner : {ownerEmail}</p>
        </p>
      </div>
      <div>
        <div className=" ">
          <form onSubmit={handleCreateShop}>
            {/*row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pl-10">
              <div>
                <h2 className="text-xl font-bold text-red-400 mb-2">Shop Name</h2>
                <input
                  type="text"
                  name="shopName"
                  placeholder="Shop Name"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-red-400 mb-2">
                  Shop Logo
                </h2>
                <input
                  type="photo"
                  name="logo"
                  placeholder=" insert Logo URL"
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
                <h2 className="text-xl font-bold text-red-400 mb-2"> Shop Location</h2>
                <input
                  type="text"
                  name="location"
                  placeholder="Shop Location"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <input
                type="submit"
                value="Create Shop"
                className="btn mt-6 w-60  bg-indigo-200 text-sky-700"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreateShop;