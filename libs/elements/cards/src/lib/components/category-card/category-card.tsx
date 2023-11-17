import styles from './category-card.module.scss';

/* eslint-disable-next-line */
export interface CategoryCardProps {}

export function CategoryCard(props: CategoryCardProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CategoryCard!</h1>
    </div>
  );
}

export default CategoryCard;
