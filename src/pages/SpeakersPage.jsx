import SpeakerCard from "../components/SpeakerCard"
import Header from '../components/Header'
import Footer from '../components/Footer'

function SpeakersPage(){

    const speakers = ["Laurent Ruquier", "Pasacel Praud", "Hanouna", "Morandini",
];

    return(
        <>
            <Header />
            {speakers.map(speaker =>{
               return <SpeakerCard currentSpeaker={speaker}/>
            })}
            <Footer />
        </>
    )
}

export default SpeakersPage