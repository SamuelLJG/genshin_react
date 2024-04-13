import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div>
        <p>Error 404!</p>
        <Link to="/">HOME</Link>
    </div>
  )
}

export default ErrorPage