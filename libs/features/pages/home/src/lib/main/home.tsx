import { Texts, TextsProps } from '@eccomerce/texts'
/* eslint-disable-next-line */
export interface HomeProps {}

export const Home = (props: HomeProps) => {
  const textData:TextsProps = {
    title: 'Reign in Style',
    subtitle:'Bags, Shoes, Casual wears and office wear.',
    description: 'Embrace your reign, empower your style, rule with confidence, start building your fashion empire with sivitex.',
  }

  return (
    <div className='container mx-auto py-20'>
      <Texts {...textData}/>

    </div>
  );
}