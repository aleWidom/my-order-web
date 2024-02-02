import { FaSearch } from "react-icons/fa";
import styles from "./Search.module.scss";



export const Search = () => {
    return (
    <button type="submit" className={styles.button}>
      <FaSearch />
    </button>
  );
};




