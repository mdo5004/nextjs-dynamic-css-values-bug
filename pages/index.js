import { useState } from 'react';
import { createUseStyles } from 'react-jss'
import MyDynamicComponent from '../components/MyDynamicComponent';
import MyStaticComponent from '../components/MyStaticComponent';

const useStyles = createUseStyles({
  container: {
    marginTop: 100,
    textAlign: 'center',
  },

  header: {
    fontSize: 24,
    lineHeight: 1.25,
  },
})

function Index() {
  const classes = useStyles()

  const [color, setColor] = useState('red');
  const toggleColor = () => setColor(color === 'red' ? 'blue' : 'red');

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>
        Example on how to use react-jss with Next.js
      </h1>
      <section>
        <button onClick={toggleColor}>Toggle Box Color</button>
        <MyDynamicComponent color={color} />
      </section>
      <section>
        <MyStaticComponent />
      </section>
    </div>
  )
}

export default Index
