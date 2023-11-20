import { ProductBanner } from "@eccomerce/hero-banner";

const  ProductPage = ({ params }: { params: { productId: string } }) => {
    const productIdentity = {
         params
    }
    return (

        <div className="flex justify-center items-center h-screen bg-gray-100">
            <ProductBanner {...productIdentity}/>
        </div>

        )
}

export default ProductPage;