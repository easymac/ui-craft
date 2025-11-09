import { useState } from 'react'
import styles from './Counter.module.css'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.counter}>
      <div className={styles.display}>{count}</div>
      <div className={styles.buttons}>
        <button 
          className={styles.button} 
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <button 
          className={styles.button} 
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        <button 
          className={styles.button} 
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Counter

