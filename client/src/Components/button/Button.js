import '../../style/button.css'

function Button({ text, widthh, onClick }) {
  return (
    <button onClick={onClick} type="submit" style={{ width: widthh || '100%' }}>
      {text}
    </button>
  )
}

export default Button
