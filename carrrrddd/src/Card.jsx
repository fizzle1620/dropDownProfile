import profile from "./assets/jugg.jpg"

function Card(){
    return(
        <div className="card">
            <img className="cardpic" src={profile} alt="profile picture"></img>
            <h2 className="cardname">Juggernaut</h2>
            <p className="ptext">pos1/carry hero</p>

        </div>
        
         
    );
    

}
export default Card