import React from 'react'

const App = () => {

  function isValidUsername(username){
    if(username.length<3 || username.length>10) {console.log("username must contain at least three, at most ten characters");return false;}
    if(username[0]<'a'||username[0]>'z')
      if(username[0]<'A'||username[0]>'Z')
        {console.log("username must start with a letter");return false}
    for (let i = 0; i < username.length; i++) {
      if((username[i]>='a' && username[i]<='z') || (username[i]>='A' && username[i]<='Z') || (username[i]>='0' && username[i]<='9')) continue;
      else {console.log("only letters and numbers are allowed in username");return false;}
    }
    for (let i = 0; i < username.length; i++) {
      if((username[i]>='a' && username[i]<='z') || (username[i]>='A' && username[i]<='Z')) return true
    }
    console.log("only letter is not allowed in username")
    return false
  }
  function isValidPassword(password){
    if(password.length<5 || password.length>10) {console.log("password must contain at least five, at most ten characters");return false;}
    for (let i = 0; i < password.length; i++) {
      if((password[i]>='a' && password[i]<='z') || (password[i]>='A' && password[i]<='Z') || (password[i]>='0' && password[i]<='9')) continue;
      else {console.log("only letters and numbers are allowed in password");return false;}
    }
    let n = false; let l = false;
    for (let i = 0; i < password.length; i++) {
      if((password[i]>='a' && password[i]<='z') || (password[i]>='A' && password[i]<='Z')) l = true
      if((password[i]>='0' && password[i]<='9')) n = true
    }
    if(n && l) return true;
    console.log("must contain at least one letter, one number")
    return false;
  }
  
  let registerUser = (event)=> {
    event.preventDefault();
    console.log("in registerUser");
    if(isValidUsername(event.target.username.value) && isValidPassword(event.target.password.value))
      alert("Registered")
    else alert("Ragistration failed!")
  }

  let loginUser = (event)=> {
    event.preventDefault();
    console.log("in loginUser");
    if(event.target.email.value==="" || event.target.password.value==="")
      alert("Login failed")
    else alert("Login Successfull")
  }

  return (
    <div>

      <div className="Auth-form-container" style={{"width":"500px","margin":"auto","margin-top":"200px"}}>
      <form className="Auth-form" onSubmit={registerUser}>
        <div className="Auth-form-content" style={{"margin":"auto"}}>
          <h3 className="Auth-form-title">Sign Up</h3>
          
          <div className="form-group mt-3">
            <label>Username<p style={{"font-size":"10px"}}>at least three, at most ten characters.<br/>can contain letter and numbers. only number is not valid. must start with a letter</p></label>
            <input
              type="text"
              name='username'
              className="form-control mt-1"
              placeholder="e.g shirsho_1106"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name='email'
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password<p style={{"font-size":"10px"}}>at least five, at most ten characters.<br/>must contain at least one letter and one number.</p></label>
            <input
              type="password"
              name='password'
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>

    <div className="Auth-form-container" style={{"width":"500px","margin":"auto","margin-top":"200px","margin-bottom":"200px"}}>
        <form className="Auth-form" onSubmit={loginUser}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
           
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                name='password'
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
