import styles from "./InputSearch.module.scss";

interface Props {
    handleChange : any, 
    handleFocus: any,
    valueInput: string
}

export const InputSearchView = ({ handleChange, handleFocus, valueInput} : Props) => {
    return (
        <input
          onChange={handleChange}
          onFocus={handleFocus}
          value={valueInput}
          placeholder={"Buscar..."}
          className={styles.inputSearch}
        />
      );
}
