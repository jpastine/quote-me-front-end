// stylesheets
import styles from './Landing.module.css'

// types
import { User } from '../../types/models'

interface LandingProps {
  user: User | null;
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user } = props

  return (
    <main className={styles.container}>
      <h1>Hello, {user ? user.name : 'friend'}</h1>
      <h1>Welcome to QuoteMe</h1>
      <h2>A place for uplifting, moving, and funny quotes!</h2>
    </main>
  )
}

export default Landing
