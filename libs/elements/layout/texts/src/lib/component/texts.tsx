import styles from './texts.module.scss';

/* eslint-disable-next-line */
export interface TextsProps {}

export function Texts(props: TextsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Texts!</h1>
    </div>
  );
}

export default Texts;
