import styles from "./InputItem.module.css"
const InputItem = ({ handleChange }) => {

    return (
        <>
            <input type="text" className={styles.inputfield} id="foodInput" placeholder="Enter Food Item Here" onKeyDown={handleChange} />
        </>
    )
}
export default InputItem
