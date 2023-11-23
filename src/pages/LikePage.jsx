import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import LikeCard from '../components/LikeCard'

function LikePage(){



        // const [clickcount0 , setClickCound0] = useState(0);

        // const likeClike0 =() =>{
        //     setClickCound0(clickcount0+1)
        // }
        
        

        // const [clickcount1 , setClickCound1] = useState(0);

        // const likeClike1 =() =>{
        //     setClickCoun1(clickcount1+1)
        // }
    

    return(
        <>
            <Header />
            <main>
                {/* state는 composant마다, 그 안에서만 영향을 미치기 때문에 props를 쓸 필요까지도 없다. */}
                <LikeCard />
                <LikeCard />
                <LikeCard />
                
                {/* <button onClick={likeClike0}>btn</button>
                <p>vous avez like {clickcount0} fois</p>

                <button onClick={likeClike1}>btn</button>
                <p>vous avez like {clickcount1} fois</p>

                <button onClick={likeClike2}>btn</button>
                <p>vous avez like {clickcount2} fois</p>

                <button onClick={likeClike3}>btn</button>
                <p>vous avez like {clickcount3} fois</p> */}
            </main>
            <Footer />
        </>
    )
}
export default LikePage