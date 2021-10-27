import React from 'react'
import styles from '../styles/Home.module.css'
import MyDynamicComponent from '../components/MyDynamicComponent'
export default function Home() {
  const [color, setColor] = React.useState('red');
  const toggleColor = () => { setColor(color === 'red' ? 'blue' : 'red') };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <MyDynamicComponent color={color} />
        <button onClick={toggleColor}>Toggle Color</button>
      </main>
    </div>
  )
}
