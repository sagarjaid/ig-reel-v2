import React from 'react'

const Timer = ({className}) => {
    const [counter, setCounter] = React.useState(15);

  // Third Attempts
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      // if(counter==10){
      //   setCounter(60)
      // }
    return () => clearInterval(timer);

  }, [counter]);
  return (
    <div className={className}>{counter}</div>

  )
}

export default Timer