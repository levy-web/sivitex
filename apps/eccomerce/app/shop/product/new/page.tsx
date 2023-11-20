"use client"
import React, { useState, ChangeEvent, FormEvent } from "react";

interface ProductDetails {
  productName: string;
  productPrice: string;
  productImage: string;
  moreDetails: string;
}

const NewProduct: React.FC = () => {
  const [productDetails, setProductDetails] = useState<ProductDetails>({
    productName: "",
    productPrice: "",
    productImage: "",
    moreDetails: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Product Details:', productDetails);
    // You can send the data to an API or perform any other actions here
  };

  return (
    <div className="h-screen w-screen justify-center items-center flex flex-col">
      <div className="container mx-auto justify-center items-center flex flex-col">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    {/* Product Image */}
                    <div className="justify-center items-center flex flex-col">
                        <div className="mb-4 ">
                        <label htmlFor="productImage" className="block text-sm font-medium text-gray-600">
                            Product Image
                        </label>
                        <input
                            type="file"
                            id="productImage"
                            name="productImage"
                            value={productDetails.productImage}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                        </div>
                    </div>
                    <div className="justify-center items-center flex flex-col">

                    {/* Product Details */}
                    <div className="p-4 grid grid-cols-2 gap-4">
                    {/* Product Name */}
                    <div className="mb-4">
                        <label htmlFor="productName" className="block text-sm font-medium text-gray-600">
                        Product Name
                        </label>
                        <input
                        type="text"
                        id="productName"
                        name="productName"
                        value={productDetails.productName}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                        />
                    </div>

                    {/* Product Category */}
                    <div className="mb-4">
                    <label htmlFor="productName" className="block text-sm font-medium text-gray-600">
                        Product Catgory
                        </label>
                        <input
                        type="text"
                        id="productName"
                        name="productName"
                        value={productDetails.productName}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                        />
                    </div>

                    {/* Product Price */}
                    
                    <div className="mb-4">
                        <label htmlFor="productPrice" className="block text-sm font-medium text-gray-600">
                        Product Price
                        </label>
                        <input
                        type="text"
                        id="productPrice"
                        name="productPrice"
                        value={productDetails.productPrice}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                        />
                    </div>

                    {/* More Details */}
                    <div className="mb-4">
                        <label htmlFor="moreDetails" className="block text-sm font-medium text-gray-600">
                        More Details
                        </label>
                        <textarea
                        id="moreDetails"
                        name="moreDetails"
                        value={productDetails.moreDetails}
                        onChange={handleChange}
                        rows={3}
                        className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>

                </div>
                {/* Submit Button */}
                <div className="flex justify-end">
                    <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                    Add Product
                    </button>
                </div>
                </div>
            </div>
            </form>
      </div>
    </div>
  );
};

export default NewProduct;
