const DropCapWord = ({ word }) => {
  const [firstLetter, ...rest] = word

  return (
    <span className="drop-cap-word">
      <span className="drop-cap">{firstLetter}</span>
      {rest.join('')}
    </span>
  )
}

export default DropCapWord
