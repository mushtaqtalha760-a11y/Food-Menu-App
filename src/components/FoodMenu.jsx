import FoodItem from "./FoodItem"
import styles from "./FoodMenu.module.css"
const FoodMenu = ({ fooditem, deleteItem }) => {
    // const fooditem = ['Bread', 'Sandwhich', 'GreenVegtable', "Salad"];
    return (
        <>
            {
                fooditem.map((items, index) => (
                    <div className={styles.list} id="list">
                        <FoodItem key={index} menuItem={items} deleteItem={deleteItem} />
                    </div>

                ))
            }

        </>
    )
}

export default FoodMenu