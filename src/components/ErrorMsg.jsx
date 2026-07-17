const ErrorMsg = ({ fooditem }) => {
  return (
    <>
      {fooditem.lenght == 0 && <h1>I am still Hungry</h1>}
    </>
  )
}
export default ErrorMsg