import styles from './IconButton.module.scss'

interface Props {
  buttonName: string, 
  children: React.ReactNode;
  styleButton?: any;
  operation: () => void;
}

export const IconButtonView = ({buttonName, operation, children, styleButton} : Props) => {
  return (
    <button onClick={operation} style={styleButton} className={styles.button}>
      {buttonName}
      {children}
    </button>
  )
}
