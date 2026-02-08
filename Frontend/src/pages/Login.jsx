import { useState } from 'react'

export default function Login(){
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    alert('This demo uses Firebase Authentication; configure in README.')
  }

  return (
    <div className="login">
      <h2>Login / Signup</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>Email<input value={email} onChange={(e)=>setEmail(e.target.value)} required/></label>
        <label>Password<input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} required/></label>
        <button type="submit">Continue</button>
      </form>
    </div>
  )
}
