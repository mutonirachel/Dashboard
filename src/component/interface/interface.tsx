
import './interface.css'
const Inter = () => {

    return (
      <div className='interf-section'>
      <div className="interface">
            <div className="navigation">
                <div className="n1">
                <img src="src/assets/search.svg" alt=""/>
                    <div className="search">
                        <input type="text" placeholder="search" />
                    </div>
                </div>
                <div className="profile">
                  <img src="src/assets/settings.svg" alt="" />
                  <img src="src/assets/notifications.svg" alt="" className='svg'/>
                    <img src="src/assets/1image.jpg"/>
                </div>
            </div>
                <h1 className='i-name'>Dashboard</h1>
        </div>
        <div className="values">
  <div className="val-box1">
    <i></i>
    <div>
      <h3>8,267</h3>
      <span>New Users</span>
    </div>
  </div>
  <div className="val-box2">
    <i></i>
    <div>
      <h3>17</h3>
      <span>New Employees</span>
    </div>
  </div>
  <div className="val-box3">
    <i></i>
    <div>
      <h3>27</h3>
      <span>New Garages</span>
    </div>
  </div>
  <div className="val-box4">
    <i></i>
    <div>
      <h3>$900</h3>
      <span>New Income</span>
    </div>
  </div>
    </div> 
    <div className="board">
      <table width="100%">
        <thead> 
          <tr>
            <td>Names</td>
            <td>Title</td>
            <td>Status</td>
            <td>Role</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td className="people">
              <img src="src/assets/1image.jpg" alt="" />
            <div>
               <h5>Rachel Mutoni</h5>
               <p>mutonirachel20@gmail.com</p>
            </div>
            </td>
            <td className="people-des">
              <h5>Frontend Engineer</h5>
              <p>Web developer</p>
            </td>
            <td className="active">
              <p>Active</p>
              </td>
            <td className="role">
              <p>Founder</p>
            </td>
            <td className="edit"><a href="#">Edit</a></td>
          </tr>
          <tr>
            <td className="people">
              {/* <img src="src/assets/1image.jpg" alt="" /> */}
            <div>
               <h5>Lydie Ingabire</h5>
               <p>lydiengabire@gmail.com</p>
            </div>
            </td>
            <td className="people-des">
              <h5>Frontend Engineer</h5>
              <p>Web developer</p>
            </td>
            <td className="active">
              <p>Active</p>
              </td>
            <td className="role">
              <p>Cofounder</p>
            </td>
            <td className="edit"><a href="#">Edit</a></td>
          </tr>
          <tr>
            <td className="people">
              {/* <img src="src/assets/1image.jpg" alt="" /> */}
            <div>
               <h5>Munezero Christian</h5>
               <p>munezerochris@gmail.com</p>
            </div>
            </td>
            <td className="people-des">
              <h5>Software Engineer</h5>
              <p>full stack developer</p>
            </td>
            <td className="active">
              <p>Active</p></td>
            <td className="role">
              <p>Cofounder</p>
            </td>
            <td className="edit"><a href="#">Edit</a></td>
          </tr>
          <tr>
            <td className="people">
              {/* <img src="src/assets/1image.jpg" alt="" /> */}
            <div>
               <h5>Ncuti Vencheur</h5>
               <p>ncutivencheur@gmail.com</p>
            </div>
            </td>
            <td className="people-des">
              <h5>Backend Engineer</h5>
              <p>Developer</p>
            </td>
            <td className="active"><p>Active</p></td>
            <td className="role">
              <p>Cofounder</p>
            </td>
            <td className="edit"><a href="#">Edit</a></td>
          </tr>
          </tbody>
        </table>
      </div>
      </div>
    )
}
export default Inter