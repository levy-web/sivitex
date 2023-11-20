const  ProductPage = ({ params }: { params: { productId: string } }) => {
    return <div className="flex justify-center items-center h-screen bg-gray-100">My Post: {params.productId}</div>
}

export default ProductPage;