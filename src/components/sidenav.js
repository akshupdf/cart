import { Link } from "react-router-dom";




function Sidenav () {
    return(
        <div className="w-[30vh] h-[50vh] border-2 border-black">
            <h1>Filtered via category</h1>
            <ul className="cursor-pointer ">
                <li ><Link to="/mens">Mens Stuff </Link></li>
                <li><Link to="/ladies">Womens Stuff </Link></li>
               
            </ul>
        </div>
    )
}

export default Sidenav;