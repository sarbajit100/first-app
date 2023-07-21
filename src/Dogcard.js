import Image from "./Image";

function Dogcard(props) {
    return(
        <>
            <h3>{props.name}</h3>
            <Image src={props.image} />
           
        </>
    )
}

export default Dogcard;

