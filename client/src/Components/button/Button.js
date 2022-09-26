function Button({ text , widthh }) {
  return (
    <div>
      <button type="submit" style={{ width: widthh }}>{text}</button>
    </div>
  );
}

export default Button;
