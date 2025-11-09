import { Link } from 'react-router-dom'
import Counter from './Counter'

function CounterPage() {
  return (
    <div>
      <Link to="/">← Back</Link>
      <h1>Counter</h1>
      <p>A simple counter component with increment, decrement, and reset functionality.</p>
      <Counter />
    </div>
  )
}

export default CounterPage

