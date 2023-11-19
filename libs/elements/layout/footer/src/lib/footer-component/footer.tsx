/* eslint-disable-next-line */
export interface FooterProps {}

export const Footer = (props: FooterProps) => {
  return (
<div className='bg-gray-300'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto py-12'>
          <div className='text-center col-lg-4'>
          <h5 className="text-xl text-pink-800">CONTACT DETAILS</h5>
            <hr className='text-white'/>

            <div className='d-flex container w-100 my-2'>
              <i className="text-primary m-auto fas fa-phone"></i>
              <small className='w-100 '>+254 791 716 946</small>
            </div>

            <div className='d-flex container m-auto w-100 my-2'>
              <i className="text-pink-800 fas fa-envelope"></i>
              <small className='w-100 '>info@sivitex.com</small>
            </div>
            <div className='d-flex container w-100 mb-2'>
              <i className="ms-1 text-danger fas fa-map-marker-alt"></i>
              <small className='ms-3 w-100'>Nairobi CBD</small>
            </div>           

                        
          </div>

          <div className='text-center col-lg-4'>
          <h5 className="text-xl text-pink-800">Terms</h5>
          <hr className='text-white'/> 
          <div className='d-flex container m-auto w-100 my-2'>
              <small className='w-100 '>Terms & Conditions</small>
            </div>
            <div className='d-flex container m-auto w-100 my-2'>
              <small className='w-100 '>Privacy Policy</small>
            </div>
            <div className='d-flex container m-auto w-100 my-2'>
              <small className='w-100 '>Cookie Policy</small>
            </div>           
          </div>

          <div className='text-center col-lg-4'>
          <h5 className="text-xl text-pink-800">CUSTOMER SERVICE</h5>
          <hr className='text-white'/>
          <div className='d-flex container m-auto w-100 my-2'>
            <small className='w-100 '>About</small>
          </div> 
          <div className='d-flex container m-auto w-100 my-2'>
            <small className='w-100 '>General Enquiries</small>
          </div> 
          <div className='d-flex container m-auto w-100 my-2'>
            <small className='w-100 '>Distribution Enquiries</small>
          </div> 
          <div className='d-flex container m-auto w-100 my-2'>
            <small className='w-100 '>Contact Us</small>
          </div> 
                     
          </div>
        </div> 
        </div>       
    </div>
  );
}