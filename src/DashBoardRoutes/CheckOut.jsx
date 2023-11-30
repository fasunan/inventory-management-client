import jsPDF from "jspdf";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const CheckOut = () => {
    const cartData= useLoaderData();
    
    // jsPDF

    const generatePDF = (cartData) => {
        const doc = new jsPDF();
        // console.log(generatePDF ,'pdf');
      
        // Add content to the PDF
        doc.text(20, 20, 'Checkout Information:');
        cartData.forEach((product, index) => {
          const yPos = 30 + index * 10;
          doc.text(20, yPos, `Product: ${product.name}, Quantity: ${product.quantity}`);
        });
      
        doc.save('checkout_information.pdf');
      };
    const handleGetPaid = async (productId) => {
        try {
          const response = await fetch(`http://localhost:5000/getPaid/${productId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          const result = await response.json();
          console.log(result);
          if (result.insertedId) {
            Swal.fire({
              title: "Success!",
              text: 'Paid successful',
              icon: "success",
              confirmButtonText: "Done",
            });
            generatePDF(cartData);
            // console.log(cartData);
          }
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <div>
          <Helmet>
                <title>Fashion Store || CheckOut</title>
            </Helmet>
      <h2 className="text-center text-sky-600 text-3xl font-bold">Your Added Products For Check-Out</h2>
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
                cartData.map((products, index) => <tr key={products._id}>
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
                      onClick={() => handleGetPaid(products._id)}
                      className="btn btn-ghost btn-lg"> Get Paid
                    </button>
                    
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

export default CheckOut;