import {motion} from 'framer-motion'


const App = () => {
  return (
    <div style={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      width: '100vw',
     }}>
      <motion.button className='bg-black text-white px-3 py-2 rounded-md' animate={{
        backgroundColor:'#f00',
        color:'white',
        scale:2,
        
      }}
      initial={{background:'violet'}}
      
      >Framer Motion</motion.button>
    </div>
  )
}

export default App