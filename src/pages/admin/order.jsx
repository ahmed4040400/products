import React, { useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: "محمد أحمد",
      product: 'Apple MacBook Pro 17"',
      date: "2023-01-01",
      total: "$2999",
    },
    {
      id: 2,
      customer: "أحمد علي",
      product: "Microsoft Surface Pro",
      date: "2023-01-02",
      total: "$1999",
    },
    {
      id: 3,
      customer: "فاطمة محمد",
      product: "Magic Mouse 2",
      date: "2023-01-03",
      total: "$99",
    },
    {
      id: 4,
      customer: "علي حسن",
      product: "Google Pixel Phone",
      date: "2023-01-04",
      total: "$799",
    },
    {
      id: 5,
      customer: "سارة إبراهيم",
      product: "Apple Watch 5",
      date: "2023-01-05",
      total: "$999",
    },
  ]);

  const handleDelete = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div>
      <div className="p-10 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                العميل
              </th>
              <th scope="col" className="px-6 py-3">
                المنتج
              </th>
              <th scope="col" className="px-6 py-3">
                التاريخ
              </th>
              <th scope="col" className="px-6 py-3">
                الإجمالي
              </th>
              <th scope="col" className="px-6 py-3">
                الإجراء
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {order.customer}
                </th>
                <td className="px-6 py-4">{order.product}</td>
                <td className="px-6 py-4">{order.date}</td>
                <td className="px-6 py-4">{order.total}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(order.id)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
          <div className="grid h-full max-w-lg grid-cols-2 mx-auto font-medium">
            <Link
              to="/adminproducts"
              className="inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x  dark:bg-gray-800 group dark:border-gray-600"
            >
              <svg
                className="w-5 h-5 mb-2 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <span className="text-sm text-blue-600 dark:text-blue-500">
                المنتجات
              </span>
            </Link>
            <Link
              to="/adminOrders"
              className="inline-flex flex-col items-center justify-center px-5 border-e bg-gray-100 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600"
            >
              <svg
                className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3 3h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm0 2v10h14V5H3Zm2 2h10v2H5V7Zm0 4h10v2H5v-2Z" />
              </svg>
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                الطلبات
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
