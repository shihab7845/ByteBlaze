import Hero from "../Components/Hero"
import wave from '../assets/wave.svg'

export default function Home() {
  return (
    <div>
     <Hero></Hero>
   
    <img className="w-full" src={wave} alt="" />
    
    </div>

  )
}
