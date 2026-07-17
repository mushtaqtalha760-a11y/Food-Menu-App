import styles from "./Button.module.css"
const Button = () => {
	let button = ['C' , '1', '2' , '+', '3','4','-','5','6','*','7','8','/','9','0','00','.','='];
	return (
		<div className={styles.buttonContainer}>
			{button.map((item)=> (<button>{item}</button>))}
      </div>
		)
}
export default Button