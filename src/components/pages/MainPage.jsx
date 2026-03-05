import config from '../layout/sections/config.js'

const MainPage = () => {
  return (
    <>
      {config.map(({ id, section: Section }) => (
        <Section key={id} />
      ))}
    </>
  )
}

export default MainPage
