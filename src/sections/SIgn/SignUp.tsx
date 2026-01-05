import "./SignUp.css"
const SignUp=()=>{

  const SubmitData =()=>{

  }
  
    return (
      <div className="signup-container">
        
        <form className='signup-form'>
          <p>

            Hi ,my name is <input type='text' name='' id='' />,
          
            I would be using <input type="email" name="" id="" /> as my email,
          
          
            password for this platform will be <input type="password" name="" id="" /> ,
          
            Let me confirm it once more <input type="password" name='' id="" />
          </p>

          <p><button type='submit' onClick={()=>{SubmitData}}>click here to confirm all the above </button></p>

        </form>
      </div>
    )
  }

export default SignUp