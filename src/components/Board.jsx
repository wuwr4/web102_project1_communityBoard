
import Movie from "./Movie"

import mando from "../assets/moviePosters/mando.png";
import odyssey from "../assets/moviePosters/odyssey.png"
import kombat from "../assets/moviePosters/kombat.png"

import supergirl from "../assets/moviePosters/supergirl.png"
import spiderman from "../assets/moviePosters/spiderman.png"
import motu from "../assets/moviePosters/motu.png"

import moana from "../assets/moviePosters/moana.png"
import minions from "../assets/moviePosters/minions.png"
import toystory from "../assets/moviePosters/toystory.png"

import devil from "../assets/moviePosters/devil.png"
import scary from "../assets/moviePosters/scary.png"
import acme from "../assets/moviePosters/acme.png"

const Board = () => {

    return (

        <div className="Board">
                <p className="genre">Action</p>
            <div className="boardRow">
                <Movie name="The Mandalorian and Grogu" release="May 22, 2026" image={mando}/>
                <Movie name="The Odyssey" release="July 17, 2026" image={odyssey} />
                <Movie name="Mortal Kombat II" release="October 23, 2026" image={kombat}/>
            </div>

                <p className="genre">Superhero</p>
            <div className="boardRow">
                <Movie name="Masters of the Universe" release="June 5, 2026" image={motu}/>
                <Movie name="Supergirl" release="June 26, 2026" image={supergirl}/>
                <Movie name="Spider-Man: Brand New Day" release="July 31, 2026" image={spiderman}/>
            </div>

                <p className="genre">Animation</p>
            <div className="boardRow">
                <Movie name="Toy Story 5" release="June 19, 2026" image={toystory}/>
                <Movie name="Minions & Monsters" release="July 1, 2026" image={minions}/>
                <Movie name="Moana" release="July 10, 2026" image={moana}/>
            </div>

                <p className="genre">Comedy</p>
            <div className="boardRow">
                <Movie name="The Devil Wears Prada 2" release="May 1, 2026" image={devil}/>
                <Movie name="Scary Movie 6" release="June 5, 2026" image={scary}/>
                <Movie name="Coyote vs. Acme" release="August 28, 2026" image={acme}/>
            </div>
        </div>

    )
}

export default Board