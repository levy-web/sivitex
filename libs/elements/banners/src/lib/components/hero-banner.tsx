import styles from './hero-banner.module.scss';

/* eslint-disable-next-line */
export interface HeroBannerProps {}

export function HeroBanner(props: HeroBannerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to HeroBanner!</h1>
    </div>
  );
}

export default HeroBanner;
