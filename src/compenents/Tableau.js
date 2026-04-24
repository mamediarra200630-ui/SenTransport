import User from './User'

function Tableau ({titre}){
    const Utlisateurs=[
        {nom : "FAYE" , prenom : "Mame Diarra"},
        {nom : "FAYE" , prenom : "Ndeye Anta"},
    ]
    return (
        <div>
            <h1>Tableau {titre} </h1>
            {
                Utlisateurs.map(({nom , prenom}) => (<User nom={nom} prenom={prenom}/>))
            }
        </div>
    )
}
export default Tableau;