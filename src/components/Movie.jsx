
const Movie = (props) => {

    return (
        <td className="Movie">
            <img src={props.image}></img>
            <h5>{props.name}</h5>
            <h6>Release Date: {props.release}</h6>
        </td>
    )

}

export default Movie