import styles from './button.module.scss';

interface ButtonProps {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className={styles.button}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
