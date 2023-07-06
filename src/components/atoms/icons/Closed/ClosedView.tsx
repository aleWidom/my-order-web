import {FaWindowClose} from "react-icons/fa";
import styles from  './Closed.module.scss'

export const ClosedView = () => {
  return (
    <div className={styles.containerClosed}>
        <FaWindowClose/>
    </div>
  )
}
