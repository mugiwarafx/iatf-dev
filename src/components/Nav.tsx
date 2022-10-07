import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <NavLink to='/'>Manifest</NavLink>
        <NavLink to='/find-a-tester'>Find a tester</NavLink>
        <NavLink to='/make-a-request'>Make a Request</NavLink>
        <NavLink to='/join-us'>Join us!</NavLink>
      </ul>
    </nav>
  )
}
