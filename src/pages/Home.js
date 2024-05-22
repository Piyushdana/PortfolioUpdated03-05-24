import './Home.css'
import CurrentJob from '../components/CurrentJob';
import TextSocialBtns from '../components/TextSocialBtns';
import Nav from '../components/Nav';

function Home(){
    
    return (
       <div className="containerHome gap-[5rem]   w-full justify-around bg-[#131418] h-[100vh] overflow-hidden flex flex-col">
         <Nav/>
         <TextSocialBtns/>
         <CurrentJob text1="Currently" text2="Open to Work"/>
       </div>
    )
}

export default Home;