import { PayCheckout } from "@eccomerce/pay-checkout";

/* eslint-disable-next-line */
export interface PayBannerProps {}

export function PayBanner(props: PayBannerProps) {
  return (
    <div className='min-h-screen pt-28 bg-gray-50'>
      <PayCheckout />
    </div>
  );
}

export default PayBanner;
