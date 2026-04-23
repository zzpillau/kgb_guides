const renderWithBreaks = (text) => {
    const parts = text.split('↵')
    return parts.map((part, i) => (
      <React.Fragment key={i}>
        {part}
        {i < parts.length - 1 && <br />}
      </React.Fragment>
    ))
  }

export default renderWithBreaks