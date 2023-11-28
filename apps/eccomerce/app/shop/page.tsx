import { Shop } from '@eccomerce/shop'

const ShopPage = ()=> {
    return (
        <div className='pt-24 md:pt-32 bg-gray-100 min-h-screen px-2'>
            <h2 className='text-3xl text-pink-800 md:px-12'>Products</h2>
            <Shop/>
        </div>
    )
}

export default ShopPage