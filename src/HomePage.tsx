import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <h1>UI Components</h1>
      <ul>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage

