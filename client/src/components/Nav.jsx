import { Link } from "react-router-dom";


export default function Nav(){

    return(
        <div>
            <header>
		{/* <!-- Nav --> */}
		<div className="nav container">
			{/* <!-- Logo --> */}
            <Link className="logo" to={"/"}>
				Rick<span className='span1'>And</span><span className='span2'>Morty</span>
				</Link>
			{/* <!-- Nav Icons -->			 */}
			<div className="nav-icons">
				<Link to={"/create"} className="btn bx-ball" id="bell-icon">Create</Link>
				{/* <div ref={menu} className="menu-icon" onClick={()=>handleToggleMenu} >
					<div className="line1"></div>
					<div className="line2"></div>
					<div className="line3"></div>
				</div> */}
			</div>
		</div>
	</header>
            <Link to={"/"}>Home</Link>
            <Link to={"/create"}>Create</Link>
        </div>
    )

}