import { Texts, TextsProps } from '@eccomerce/texts'
import { NormalButton, NormalButtonProps } from '@eccomerce/buttons'
/* eslint-disable-next-line */
export interface HeroBannerProps {}

export const HeroBanner = (props: HeroBannerProps) => {
  const textData:TextsProps = {
    title: 'Reign in Style',
    subtitle:'Bags, Shoes, Casual wears and office wear.',
    description: 'Embrace your reign, empower your style, rule with confidence, start building your fashion empire with sivitex.',
  }
  const buttonData:NormalButtonProps = {
    text: "Unlock your potential",
    bgColor: 'bg-pink-800',
    color: 'text-white',
    hoverBgColor: 'hover:bg-gray-500',
    hoverColor: 'hover:text-white',
  }
  return (
    <div className='bg-gray-100 h-screen flex items-center justify-center'>
        <div className='md:hidden h-screen-20 flex items-center justify-center'>
          <div className='h-full bg-gradient-to-r from-gray-800 to-transparent w-screen flex items-center justify-center'>

              <div className='h-full flex items-center justify-center'>

              <div className='absolute py-8 mx-auto'>
                  <div>
                    <div>
                    <Texts {...textData}/>
                    </div>
                    <div>
                      <NormalButton {...buttonData}/>
                    </div>                
                  </div>
              </div>
                
                <img src='/model.png' alt='' className='w-3/5 h-3/5' />
              </div>
          </div>
        </div>

        {/* on mobile device */}

        <div className='hidden md:block h-screen-20 flex items-center justify-center'>
          <div className='h-full bg-gradient-to-r from-gray-800 to-transparent w-screen flex items-center justify-center'>

              <div className='h-full flex items-center justify-center'>

              <div className='absolute py-8 mx-auto'>
                  <div>
                    <div>
                    <Texts {...textData}/>
                    </div>
                    <div>
                      <NormalButton {...buttonData}/>
                    </div>                
                  </div>
              </div>
                
                <img src='/model3.png' alt='' className='w-3/5 h-3/5' />
              </div>
          </div>
        </div>
    </div>
    
  );
}