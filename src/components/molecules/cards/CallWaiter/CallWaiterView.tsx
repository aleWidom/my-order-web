import styles from './CallWaiter.module.scss';

interface Props {
    message: string,
    handleCallOrNotCall: () => void,
    styleButton: any
}

export const CallWaiterView = ({message, handleCallOrNotCall, styleButton}: Props) => {
    return (
        <div className={styles.containerCallWaiter}>
            <button style={styleButton} className={styles.button} onClick={handleCallOrNotCall}>
                {message}
            </button>
        </div>
    );
}
