import styles from './styles.module.css';



type Props = {
    addQt: () => void;
    minusQt: () => void;
    quantity: number;
}

export const QuatityButton = ({ addQt, minusQt, quantity }: Props) => {
    return (
        <div className={styles.containerQuantity}>
            <div className={styles.Quantitybuttons}>
                <div className={styles.Quantitybtn} onClick={minusQt}>-</div>
                <div className={styles.Quantityqt}>{quantity}</div>
                <div className={styles.Quantitybtn} onClick={addQt}>+</div>
            </div>
        </div>
    );
}

export default QuatityButton;