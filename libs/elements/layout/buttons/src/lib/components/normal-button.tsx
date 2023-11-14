import styles from './normal-button.module.scss';

/* eslint-disable-next-line */
export interface NormalButtonProps {}

export function NormalButton(props: NormalButtonProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NormalButton!</h1>
    </div>
  );
}

export default NormalButton;
