import React, { useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [orders, setOrders] = useState([
    {
      id: 1,
      name: 'Apple MacBook Pro 17"',
      color: "Silver",
      category: "Laptop",
      price: "$2999",
    },
    {
      id: 2,
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      price: "$1999",
    },
    {
      id: 3,
      name: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: "$99",
    },
    {
      id: 4,
      name: "Google Pixel Phone",
      color: "Gray",
      category: "Phone",
      price: "$799",
    },
    {
      id: 5,
      name: "Apple Watch 5",
      color: "Red",
      category: "Wearables",
      price: "$999",
    },
  ]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    color: "",
    category: "",
    price: "",
  });

  const handleDelete = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const handleAddProduct = () => {
    const newId = orders.length ? orders[orders.length - 1].id + 1 : 1;
    setOrders([...orders, { ...newProduct, id: newId }]);
    setNewProduct({ name: "", color: "", category: "", price: "" });
    setOpen(false);
  };

  return (
    <div>
      <div class="p-10 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                اسم المنتج
              </th>
              <th scope="col" class="px-6 py-3">
                اللون
              </th>
              <th scope="col" class="px-6 py-3">
                الفئة
              </th>
              <th scope="col" class="px-6 py-3">
                السعر
              </th>
              <th scope="col" class="px-6 py-3">
                الإجراء
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {order.name}
                </th>
                <td class="px-6 py-4">{order.color}</td>
                <td class="px-6 py-4">{order.category}</td>
                <td class="px-6 py-4">{order.price}</td>
                <td class="px-6 py-4">
                  <button
                    onClick={() => handleDelete(order.id)}
                    class="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div class="flex justify-center mt-4">
        <button
          onClick={() => setOpen(true)}
          class="px-4 py-2 bg-blue-600 text-white rounded"
        >
          إضافة منتج
        </button>
      </div>
      {open && (
        <div class="fixed z-30 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div class="bg-white p-6 rounded shadow-md">
            <h2 class="text-xl mb-4">إضافة منتج جديد</h2>
            <input
              type="text"
              placeholder="الاسم"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              class="mb-2 p-2 border rounded w-full"
            />
            <input
              type="text"
              placeholder="اللون"
              value={newProduct.color}
              onChange={(e) =>
                setNewProduct({ ...newProduct, color: e.target.value })
              }
              class="mb-2 p-2 border rounded w-full"
            />
            <input
              type="text"
              placeholder="الفئة"
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
              class="mb-2 p-2 border rounded w-full"
            />
            <input
              type="text"
              placeholder="السعر"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              class="mb-4 p-2 border rounded w-full"
            />
            <button
              onClick={handleAddProduct}
              class="mr-2 px-4 py-2 bg-green-600 text-white rounded"
            >
              إضافة
            </button>
            <button
              onClick={() => setOpen(false)}
              class="px-4 py-2 bg-red-600 text-white rounded"
            >
              إلغاء
            </button>
          </div>
        </div>
      )}
      <div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div class="grid h-full max-w-lg grid-cols-2 mx-auto font-medium">
          <Link
            to="/adminproducts"
            class="inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x bg-gray-100 dark:bg-gray-800 group dark:border-gray-600"
          >
            <svg
              class="w-5 h-5 mb-2 text-blue-600 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <span class="text-sm text-blue-600 dark:text-blue-500">
              المنتجات
            </span>
          </Link>
          <Link
            to="/adminOrders"
            class="inline-flex flex-col items-center justify-center px-5 border-e border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600"
          >
            <svg
              class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3 3h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm0 2v10h14V5H3Zm2 2h10v2H5V7Zm0 4h10v2H5v-2Z" />
            </svg>
            <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              الطلبات
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
