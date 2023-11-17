import styles from './carousel-banner.module.scss';

/* eslint-disable-next-line */
export interface CarouselBannerProps {}

export function CarouselBanner(props: CarouselBannerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CarouselBanner!</h1>
    </div>
  );
}

export default CarouselBanner;
