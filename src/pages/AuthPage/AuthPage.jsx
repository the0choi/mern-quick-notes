import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import {useState} from "react"

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true)

  function handleToggle() {
    setShowLogin(!showLogin);
  }

  return (
    <main>
      <h1>AuthPage</h1>
      <button onClick={handleToggle}>{showLogin ? 'Sign Up' : 'Login' }</button>
      { showLogin ?
        <LoginForm setUser={setUser} />
      :
        <SignUpForm setUser={setUser} />
      }
    </main>
  );
}