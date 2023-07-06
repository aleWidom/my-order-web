import { FaSearch } from "react-icons/fa";
import styles from "./Search.module.scss";

interface Props {
    handleSubmit: any
}

export const SearchView = ({handleSubmit} : Props) => {
  return (
    <button onClick={handleSubmit} className={styles.button}>
      <FaSearch/>
    </button>
  )
}
