'use client'
import React, {useState} from 'react';

import { NormalButton, NormalButtonProps } from '@eccomerce/buttons';

interface CheckoutProps {}

export const Checkout: React.FC<CheckoutProps> = (props) => {
  const [city, setCity] = useState<string | null>(null)
  const [deliveryMeans, setDeliveryMeans] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const checkoutButton: NormalButtonProps = {
    text: loading ? "checking out .." : "checkout",
    bgColor: 'bg-pink-800',
    color: 'text-white',
    hoverBgColor: 'hover:bg-gray-500',
    hoverColor: 'hover:text-white',
    buttonClick: ()=>{}
  }

  const getDeliveryService = (city:string | null) => {
    switch (city) {
      case "Nairobi":
        return ["Embassava", "Kenya Mpya", "Manmo", "BD"];
      case "Embu":
        return ["Neno sacco", "Imani sacco"];
      case "Mombasa":
        return ["Coast Bus", "Mash", "Dreamline"];
      default:
        return [];
    }
  }

  const deliveryOptions = getDeliveryService(city).map((service)=><option>{service}</option>) 

  const checkout = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    console.log('checked')
    setLoading(false)

  }

  return (
    <div className="container">
      <form onSubmit={checkout}>
      <div className="p-2">
          <label className="text-gray-600">phone</label>
          <input
            required
            type="text"
            name="phone"
            id="phone"
            placeholder="phone"
            className="ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-indigo-600 rounded-md border-0 py-1.5 bg-gray-50 w-full mb-2 text-center"
          />
        </div>
        <div className="p-2">
          <label className="text-gray-600">id/passport</label>
          <input
            type="number"
            name="id/passport"
            id="id/passport"
            placeholder="id/passport"
            className="ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-indigo-600 rounded-md border-0 py-1.5 bg-gray-50 w-full mb-2 text-center"
          />
        </div>
        <div className="p-2">
          <label className="text-gray-600">city</label>
        <select
          required
          id="town"
          name="town"
          onChange={(event: React.ChangeEvent<HTMLSelectElement>)=>setCity(event.target.value)}
          value={city ?? ""}
          className="ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-indigo-600 rounded-md border-0 py-1.5 bg-gray-50 w-full mb-2 text-center"
          >
          <option>select your location</option>
          <option>Nairobi</option>
          <option>Embu</option>
          <option>Mombasa</option>
        </select>
        </div>

        {city && (
        <div className="p-2">
          <label className="text-gray-600">delivery</label>
        <select
          required
          value={deliveryMeans ?? ""}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>)=>setDeliveryMeans(event.target.value)}
          id="delivery"
          name="delivery"
          className="ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-indigo-600 rounded-md border-0 py-1.5 bg-gray-50 w-full mb-2 text-center"
          >
          {deliveryOptions}
        </select>
        </div>)}

        <div className="p-2 flex w-full justify-center">
          <NormalButton {...checkoutButton}/>
        </div>       

      </form>
    </div>
  );
};

export default Checkout;
