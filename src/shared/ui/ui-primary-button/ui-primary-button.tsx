import styles from './ui-primary-button.module.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const UIPrimaryButton: React.FC<IProps> = ({ text, ...props }) => {
  console.log('props', props);

  return (
    <button className={styles.button} {...props}>
      {text}
    </button>
  );
};
