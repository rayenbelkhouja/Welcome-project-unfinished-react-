import './register.css'

export default function Register() {
  return (
    <div className="login">
        <div className="left-login">
            <div className='login-logo'><span className='w-color'>W</span>elcome</div>
            <div className='login-desc'>Connect with your friends and the world around u with Welcome.</div>
        </div>
        <div className="right-login">
            <div><input className='login-input' placeholder="Username" /></div>
            <div><input className='login-input' placeholder="Email"/></div>
            <div><input className='login-input' placeholder="Password" /></div>
            <div><input className='login-input' placeholder="Password Again" /></div>

            <div><button className='login-button'> Sign Up</button> </div>
            <div><button className='create-account-button'>Log into account</button></div>
        </div>
    </div>
  )
}

