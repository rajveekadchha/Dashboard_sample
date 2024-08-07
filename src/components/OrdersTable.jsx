// src/OrdersTable.jsx
import React from "react";

const orders = [
  {
    id: 1,
    customer: "Wade Warren",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
  },
  {
    id: 2,
    customer: "Jane Cooper",
    orderNo: "48965786",
    amount: "$365.02",
    status: "Delivered",
  },
  {
    id: 3,
    customer: "Guy Hawkins",
    orderNo: "78958215",
    amount: "$45.88",
    status: "Cancelled",
  },
  {
    id: 4,
    customer: "Kristin Watson",
    orderNo: "20965732",
    amount: "$65.00",
    status: "Pending",
  },
  {
    id: 5,
    customer: "Cody Fisher",
    orderNo: "95715620",
    amount: "$545.00",
    status: "Delivered",
  },
  {
    id: 6,
    customer: "Savannah Nguyen",
    orderNo: "78514568",
    amount: "$128.20",
    status: "Delivered",
  },
];

const OrdersTable = () => {
  return (
    <div className="p-4  text-white h-[250px] max-sm:h-[400px]">
      <h2 className="text-xl font-bold mb-2 text-justify">Recent Orders</h2>
      <div className="overflow-x-auto max-h-96 max-sm:max-h-[20rem]">
        <table className="min-w-full ">
          <thead className="sticky top-0 ">
            <tr>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Order No.</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-700">
                <td className="p-3 flex items-center">
                  <img
                    src={`https://i.pravatar.cc/40?img=${order.id}`}
                    alt={order.customer}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  {order.customer}
                </td>
                <td className="p-3">{order.orderNo}</td>
                <td className="p-3">{order.amount}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs opacity-50 ${
                      order.status === "Delivered"
                        ? "bg-green-600 text-green-300"
                        : order.status === "Pending"
                        ? "bg-yellow-600 text-yellow-300"
                        : "bg-red-600 text-red-300"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
