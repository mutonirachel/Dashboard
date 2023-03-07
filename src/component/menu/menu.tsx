
import './menu.css'
const Menu = () => {


    return(
       
          <div>
         <div id="menu">
          <div className="logo">
            <img src="src/assets/Exclude.png" alt="" className="images"/>
          <h1 className="dyn">SGS Project</h1>
          </div>
          <div className="items"> 
       <li><a href="#">Dashboard</a></li>
       <li><a href="#">Admin</a></li>
       <li><a href="#">Manager</a></li>
       <li><a href="#">Users</a></li>
       <li><a href="#">Employees</a></li>
       <li><a href="#">Garages</a></li>
       <li><a href="#">Financial  Details</a></li>
       <li><a href="#">Row Materials</a></li>                   
    </div>
         </div>
          </div>
          )
}
export default Menu