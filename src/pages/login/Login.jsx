import './login.css'

export default function Login() {
  return (
    <div className="login">
      <div className="left-login">
        <div className='login-logo'><span className='w-color'>W</span>elcome</div>
        <div className='login-desc'>Connect with your friends and the world around u with Welcome.</div>
      </div>
      <div className="right-login">
          <div><input className='login-input' placeholder="Email"/></div>
          <div><input className='login-input' placeholder="Password" /></div>
          <div><button className='login-button'> Log in</button> </div>
          <div className='forget-password'>Forget Password ?</div>
          <div><button className='create-account-button'>Create a new account</button></div>
      </div>
  
    </div>
  )
}
