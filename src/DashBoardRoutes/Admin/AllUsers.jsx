import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
const AllUsers = () => {
    const allUsers = useLoaderData();
    console.log(allUsers)
    return (
        <div>
            <Helmet>
                <title>Fashion Store || Users</title>
            </Helmet>
            <div>

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
                                allUsers.map((user, index) => <tr key={user._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex item-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.imageUrl} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>{user.quantity}</td>
                                    <td>{user.saleCount}</td>
                                    <th>
                                        {/* <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-ghost btn-lg"> Delete
                      <FaTrashAlt className="text-red-600"></FaTrashAlt>
                    </button>
                    <Link to={`/dashboard/update/${user._id}`}> <button
                      className="btn btn-ghost btn-lg"> Update
                      <GrUpdate className="text-red-600"></GrUpdate>
                    </button></Link> */}
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

export default AllUsers;