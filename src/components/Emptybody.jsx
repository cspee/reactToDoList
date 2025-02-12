import ManDark from "../assets/ManDark"
import ManLight from "../assets/ManLight"


export default function Emptybody() {
    return (

        <div className="empty-body">

            <div className="empty-detectiveDark">
                <ManDark />
                <p>Empty...</p>
            </div>
            <div className="empty-detectiveLight hidden">
                <ManLight />
                <p>Empty..</p>
            </div>
            
            

        </div>


    )
}
