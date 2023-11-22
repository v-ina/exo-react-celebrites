function SpeakerCard({currentSpeaker}){

    return(
        <article>
            <h3>{currentSpeaker}</h3>
            <p>{currentSpeaker} est un/e bon/ne speaker.</p>
        </article>
    )
}

export default SpeakerCard