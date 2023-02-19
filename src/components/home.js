import { Link } from 'react-router-dom';
import wel from '../images/wel.png'

function Home () {
    return(
        <div className='w-[150vh] h-auto mx-auto mt-10'>
            <div className='flex '>
            <h1 className='m-4'>Please Login to check our products</h1>
            <button className='border-2 border-black p-2 rounded-xl m-2'><Link to="/login">Login</Link></button>
            </div>
            

            <img src={wel} alt="" className=''></img>



            
        </div>
    )
}

export default Home;