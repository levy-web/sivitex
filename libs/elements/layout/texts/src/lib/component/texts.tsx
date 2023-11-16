import { HeroText } from '@eccomerce/text-interface'
/* eslint-disable-next-line */
export interface TextsProps extends HeroText {}

export const Texts: React.FC<TextsProps> = (props) => {

  const {
    title,
    description

  } = props;

  return (
    <div className='w-full content-center'>
      <h1 className='text-6xl text-white py-8 px-4'> {title} </h1>
      <p className='text-white md:w-1/2 py-8 px-4'> {description} </p>
    </div>
  );
}