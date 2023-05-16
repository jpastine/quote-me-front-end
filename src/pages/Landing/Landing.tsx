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
      <h1>Welcome to <div id='title' className={styles.landing}> QuoteMe</div></h1>
      <h2>A place for uplifting, moving, and funny quotes!</h2>
      <div className={styles.landingContainer}>
        <div className={styles.instructions}>1. Log in or sign up to get started! Then add your favorite quote and author</div>
        <div className={styles.instructions}>2. Check out other quotes that have been added and give the a rating.</div>
        <div className={styles.instructions}>3. Come back daily for inspiration or laughs!</div>
      </div>
    </main>
  )
}

export default Landing
