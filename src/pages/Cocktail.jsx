import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

function Cocktail(){

    const [cocktails, setCocktails] = useState(null)

    if(!cocktails){
        // on va recuperer API par ce lien
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
        // attend jusuqu'a fonction fetch() finit son travail(qu'il recupere)
        // et apres, on vas changer cette donnee à json
        .then((response)=>{
            return response.json()
        })
        .then((json)=>{   // les donnees transformees
            setCocktails(json.drinks)
            // pareil, on a envie d'avoir un vrai objet, au lieu de json. et le stocker dans notre variable
            // on stock le resultat de 'json.drinks' à variable 'cocktails'
        })
        .catch(()=>{
            // en cas d'erreur
        })
        
    }
    
    console.log(cocktails);
    // cette fonction 'setCocktails()' nous permet à stocker à 'cocktails' une nouvelle valeur
    // donc, pour stocker le valeur json, ce qu'on a recuperé par API, on appele fonction 'setCocktails()'
    // fonction 'setCocktails()' rechere le composant. donc fetch commence depuis le zero
    // pour eviter ce probeleme, on a mis une condition 'quand cocktails est pas de valeur, fetch fait son travail'


    return(
        <>
            <Header />
            <main>
                {cocktails? (
                    <>
                        {cocktails.map((cocktail,ind)=>{
                            return (
                                // nos variable 'cocktails' est un tableau, on peut le faire boucler.
                                // avec map, on creer les nouveaux articles
                                <article>
                                    <p>{ind +1}</p>
                                    <p>category : {cocktail.strCategory}</p>
                                    <p>nom de cocktail : {cocktail.strDrink}</p>
                                </article>
                            )
                        })}
                    </>
                ):(
                    <p>cocktails en cours de chargement</p>
                )}

                {/* quand cocktail n'a pas de valeur(avant finir de chargement, il aura une valeur de <p>ocktails en cours de chargement</p>)
                et une fois le chargement est fini, DOM affiche <p>cocktails pretes<p/> */}

            </main>
            <Footer />
        </>
    )
}

export default Cocktail