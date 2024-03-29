"use client"
import React, { useState, ChangeEvent, FormEvent } from "react";

import { addNewProduct } from '@eccomerce/new-product'
import { NormalButton, NormalButtonProps } from "@eccomerce/buttons";

interface ProductDetails {
  productName: string;
  productPrice: number;
  productCategory: string;
  moreDetails: string;
}

const ImagePreview: React.FC<{ src: string }> = ({ src }) => (
    <img src={src} alt="Image Preview" className={`w-80 h-60 ${src ? 'block' : 'hidden'}`}  />
);
/* eslint-disable-next-line */
export interface NewProductFormProps {}

export const NewProductForm = (props: NewProductFormProps) => {

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false)
  const [productDetails, setProductDetails] = useState<ProductDetails>({
  productName: "",
  productPrice: 0,
  productCategory: "",
  moreDetails: "",
});

const buttonData:NormalButtonProps = {
  text:  loading ? 'loading ...' : 'Add Product' ,
  bgColor: 'bg-pink-800',
  color: 'text-white',
  hoverBgColor: 'hover:bg-gray-500',
  hoverColor: 'hover:text-white',
  buttonClick: ()=> {}
}


const previewImage = (event: ChangeEvent<HTMLInputElement>) => {
  const input = event.target;

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      setImageSrc(e.target?.result as string);
    };

    reader.readAsDataURL(input.files[0]);
  }
};

const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
  const { name, value } = e.target;
  setProductDetails((prevDetails) => ({
    ...prevDetails,
    [name]: value,
  }));
};

const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault();
  setLoading(true)

  try {
    // Call addNewProduct with the product details and image base64 data
    const productId = await addNewProduct(productDetails, imageSrc || undefined);
    setLoading(false)
    console.log('Product added with ID:', productId);
    // You can redirect or perform other actions upon successful product addition
  } catch (error) {
    setLoading(false)
    console.error('Error adding product:', error);
    // Handle the error appropriately, e.g., show an error message to the user
  }

};

  return (
    <div className="h-screen bg-gray-100 w-screen justify-center items-center flex flex-col">
      <div className="container mx-auto justify-center items-center flex flex-col">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Product Image */}
                    <div className="justify-center items-center flex flex-col">
                        <div className="mb-4 ">
                        <label htmlFor="productImage" className="block text-sm font-medium text-gray-600">
                            Product Image
                        </label>
                        <input
                            accept="image/*" 
                            onChange={previewImage}
                            type="file"
                            id="productImage"
                            name="productImage"
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                        </div>
                        <ImagePreview src={imageSrc || ''} />
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
                    <label htmlFor="productCategory" className="block text-sm font-medium text-gray-600">
                        Product Catgory
                        </label>
                        <input
                        type="text"
                        id="productCategory"
                        name="productCategory"
                        value={productDetails.productCategory}
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
                        type="number"
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
                <NormalButton {...buttonData}/>
                </div>
            </div>
            </form>
      </div>
    </div>
  );
}
