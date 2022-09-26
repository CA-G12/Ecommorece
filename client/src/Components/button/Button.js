import '../../style/button.css';

function Button({ text, widthh }) {
  return (<button type="submit" style={{ width: widthh || '100%' }}>{text}</button>
  );
}

export default Button;
