

const OperationButton = (props) => {

  return (
    <button
    onClick={props.function} 
    className={props.class + "-btn"} 
    >
      {props.symbol}
    </button>
  )
}

export default OperationButton