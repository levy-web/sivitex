import styles from './product-banner.module.scss';

/* eslint-disable-next-line */
export interface ProductBannerProps {  params: { productId: string }}

export const ProductBanner = (props: ProductBannerProps) =>  {
  const {
    params
  } = props;
  
  return (
    <div className={styles['container']}>
      My Post: {params.productId}
    </div>
  );
}