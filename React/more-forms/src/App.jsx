import Fields from "./components/Fields"

import { useState } from "react"
function App() {

  const [Fname, setFname] = useState("")
  const [Lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const [confirm, setConfirm] = useState("")

  const style = "h-8 w-3/5 border-2 border-solid rounded-[8px] " // styling the input field

  return (
    <div className="flex flex-col items-center h-[100vh]">
      <form>

        <Fields data="First Name">
          <input type="text" className={style} onChange={(e) => setFname(e.target.value)} />
        </Fields>

        {Fname!=="" && Fname.length<2 && <h1 className="mt-[-30px] text">First Name must be at least 2 characters</h1>}


        <Fields data="Last Name" >
          <input type="text" className={style} onChange={(e) => setLname(e.target.value)} />
        </Fields>

        {Lname!=="" && Lname.length<2 && <h1 className="mt-[-30px] text">Last Name must be at least 2 characters</h1>}


        <Fields data="Email" >
          <input type="text" className={style} onChange={(e) => setEmail(e.target.value)} />
        </Fields>
        
        {email!=="" && email.length<2 && <h1 className="mt-[-30px] text">Email must be at least 2 characters</h1>}


        <Fields data="Password" >
          <input type="text" className={style} onChange={(e) => setPwd(e.target.value)} />
        </Fields>

        {pwd!="" && pwd.length<8 && <h1 className="mt-[-30px] text">Password must be at least 8 characters</h1>}


        <Fields data="Confirm Password" >
          <input type="text" className={style} onChange={(e) => setConfirm(e.target.value)} />
        </Fields>

        {pwd!==confirm && pwd!=="" && <h1 className="mt-[-30px] text">Passwords must match</h1>}


      </form>
    </div>
  )
}

export default App