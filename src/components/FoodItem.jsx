import styles from "./FoodItem.module.css"
const FoodItem = ({ menuItem, deleteItem }) => {

  return (
    <>
      <div className={styles.item} >
        <span className={styles.itemname}>{menuItem}</span>
        <button className={styles.btn} onClick={deleteItem}>Success</button>
      </div>
    </>
  )
}
export default FoodItem