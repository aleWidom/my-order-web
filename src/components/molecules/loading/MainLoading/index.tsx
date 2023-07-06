import { MainBrand } from "../../../atoms";
import BeatLoader from "react-spinners/BeatLoader";
import styles from './MainLoading.module.scss'
import {useFetchCallTable,  useFetchTable, useFetchLoading, useFetchCardsDayPlates, useFetchCardsRankingPlates, useFetchCardsSpecialsCheff, useFetchCategories, useFetchItems} from "../../../../hooks";


export const MainLoading = () => {


   useFetchItems()

  useFetchCategories();

 /* useFetchTable()*/

  useFetchCallTable()

  useFetchCardsRankingPlates();

	useFetchCardsDayPlates();

	useFetchCardsSpecialsCheff();
  
  useFetchLoading() 



  return (
    <div className={styles.containerLoading}>
      <MainBrand />
      <BeatLoader size={5} color={'#fff'} margin={2} />
    </div>
  )
}

