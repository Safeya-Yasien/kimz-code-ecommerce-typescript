import { Heading } from "@/components/common";
import { Loading } from "@/components/feedback";
import useOrders from "@/hooks/useOrders";

const Orders = () => {
  const {
    loading,
    error,
    orderList,
    showModal,
    selectedProduct,
    viewDetailsHandler,
    closeModalHandler,
  } = useOrders();

  return (
    <>
      {/* Modal for Product Details */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-between items-center border-b pb-3">
              <h2 className="text-lg font-semibold">Products Details</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeModalHandler}
              >
                ✕
              </button>
            </div>
            <div className="mt-4 space-y-4">
              {selectedProduct.map((el) => (
                <div
                  key={el.id}
                  className="flex items-center border p-4 rounded-lg shadow-sm bg-gray-100"
                >
                  {/* Product Image */}
                  <img
                    src={el.img}
                    alt={el.title}
                    className="w-24 h-24 object-cover rounded-md"
                  />

                  {/* Product Details */}
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{el.title}</h3>
                    <p className="text-gray-600">
                      Price: ${el.price.toFixed(2)}
                    </p>
                    <p className="text-gray-600">
                      Quantity: {el.quantity ?? 1}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Heading title="My Orders" />

      <Loading status={loading} error={error}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3">Order Number</th>
                <th className="p-3">Items</th>
                <th className="p-3">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((el) => (
                <tr key={el.id} className="border-t">
                  <td className="p-3">#{el.id}</td>
                  <td className="p-3">
                    {el.items.length} item(s) /{" "}
                    <span
                      className="text-blue-500 underline cursor-pointer"
                      onClick={() => viewDetailsHandler(el.id)}
                    >
                      Product Details
                    </span>
                  </td>
                  <td className="p-3">${el.subtotal.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Loading>
    </>
  );
};

export default Orders;
