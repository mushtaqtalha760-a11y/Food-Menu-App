import styles from './App.module.css'
import Display from "./component/Display"
import Button from "./component/Button"
function App() {
  

  return (
    <div className={styles.calculator}>
      <Display></Display>
      <Button></Button>
    </div>
  )
}

export default App
