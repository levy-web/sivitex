import { CarouselBanner, ProductBanner } from "@eccomerce/hero-banner";

const  ProductPage = ({ params }: { params: { productId: number } }) => {
    const productIdentity = {
         params
    }
    return (

        <div className="bg-gray-100">
            <ProductBanner {...productIdentity}/>
            <CarouselBanner/>
        </div>

        )
}

export default ProductPage;