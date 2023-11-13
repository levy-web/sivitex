import styles from './about.module.scss';

/* eslint-disable-next-line */
export interface AboutProps {}

export const About = (props: AboutProps) => {
  return (
    <div className={styles['container']}>
      <h1>Welcome to About!</h1>
    </div>
  );
}