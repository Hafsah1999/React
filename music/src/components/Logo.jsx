import audio from '../songs/audio1.mp3'
const Logo = () => {

 
    return (
    

            <header className='header'>
                
                        <h1 className=" heading-Logo p-3">We Bring The Noise</h1>

                        <form className="input-group w-50 p-2">
                        <input type="search" className='search form-control w-50 p-2 px-3 bg-dark text-light' placeholder='Your music here..' />
                        <button className=" btn-search">Browse</button>
                        <audio src={audio}  type="audio/mpeg" autoPlay controls></audio>
                        </form>
           
            </header>

     
    )
}

export default Logo