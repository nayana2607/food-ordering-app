import { useRouteError } from 'react-router-dom'

const Error = () => {
  const err = useRouteError()

  return (
    <div>
      <h1 style={{ color: 'red' }}>OOPss!!</h1>
      <h3>Page does not exist</h3>
      <h4>{err.error.message}</h4>
    </div>
  )
}

export default Error
