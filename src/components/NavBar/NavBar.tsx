// npm modules
import { NavLink } from 'react-router-dom'

// types
import { User } from '../../types/models'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props
  
  return (
    <nav>
      {user ?
        <ul >
          <div className='container'>

          
            <div className='left'>
              <li id='title'>QuoteMe</li>
            </div>
            <div className='right'>
              <li>Welcome, {user.name}</li>
              <li><NavLink to="/quotes">Quotes</NavLink></li>
              <li><NavLink to='/add-quote'>Add Quote</NavLink></li>
              <li><NavLink to="/change-password">Change Password</NavLink></li>
              <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>

            </div>
          </div>
        </ul>
      :
        <ul>
          <div className='container'>
            <div className='left'>
              <li id='title'>QuoteMe</li>
            </div>
            <div className='right'>
          <li><NavLink to="/login">Log In</NavLink></li>
          <li><NavLink to="/signup">Sign Up</NavLink></li>

            </div>
            

          </div>
        </ul>
      }
    </nav>
  )
}

export default NavBar
