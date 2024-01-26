import styles from './CallWaiter.module.scss';

interface Props {
    message: string,
    handleCallOrNotCall: () => void,
    color: string
}

export const CallWaiterView = ({message, handleCallOrNotCall, color}: Props) => {
    return (
        <div className={styles.containerCallWaiter}>
            <button className={`${styles.button} ${styles[color]}`} onClick={handleCallOrNotCall}>
                {message}
            </button>
        </div>
    );
}