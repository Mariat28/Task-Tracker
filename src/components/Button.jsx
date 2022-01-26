const Button = ({text, onAdd, showAdd}) => {
  return (
    <div>
      <button onClick={onAdd} className = {`rounded-sm  p-1 text-white  cursor-pointer text-sm ${showAdd ? "bg-red-500" : "bg-green-700"}`}
      >{text}</button>
    </div>
  )
}

export default Button
