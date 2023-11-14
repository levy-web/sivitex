import { HeroText } from '@eccomerce/text-interface'
/* eslint-disable-next-line */
export interface TextsProps extends HeroText {}

export const Texts: React.FC<TextsProps> = (props) => {

  const {
    title,
    subtitle,
    description

  } = props;

  return (
    <div className='bg-blue-200 w-full py-20'>
      <h1 className='text-6xl py-8 px-4'> {title} </h1>
      <h4 className='text-3xl py-8 px-4'> {subtitle} </h4>
      <p className='text-2xl py-8 px-4'> {description} </p>
    </div>
  );
}