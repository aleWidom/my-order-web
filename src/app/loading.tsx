import { MainBrand } from "@/components/atoms";
import { BeatLoader } from "react-spinners";
import styles from './Loading.module.scss'

export default function Loading() {
    return (
        <div className={styles.containerLoading}>
            <MainBrand />
            <BeatLoader size={5} color={'#fff'} margin={2} />
        </div>
    )
}