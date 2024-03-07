import {motion} from 'framer-motion'


const App = () => {
  return (
    <div className='flex items-center justify-center'>
      <motion.button className='bg-black text-white px-3 py-2 rounded-md' animate={{
        backgroundColor:'#f00',
        color:'white',
        scale:2,
        y:50,
        rotate:1800
      }}>Framer Motion</motion.button>
    </div>
  )
}

export default App