import Fields from "./components/Fields"
import Display from "./components/Display"

import { useState } from "react"
function App() {

  const [Fname, setFname] = useState("")
  const [Lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const [Confirm, setConfirm] = useState("")

  const style = "h-8 w-3/5 border-2 border-solid rounded-[8px] " // styling the input field

  return (
    <div className="flex flex-col items-center h-[100vh]">
      <form>

        <Fields data="First Name" >
          <input type="text" className={style} onChange={(e) => setFname(e.target.value)} />
        </Fields>

        <Fields data="Last Name" >
          <input type="text" className={style} onChange={(e) => setLname(e.target.value)} />
        </Fields>

        <Fields data="Email" >
          <input type="text" className={style} onChange={(e) => setEmail(e.target.value)} />
        </Fields>

        <Fields data="Password" >
          <input type="text" className={style} onChange={(e) => setPwd(e.target.value)} />
        </Fields>

        <Fields data="Confirm Password" >
          <input type="text" className={style} onChange={(e) => setConfirm(e.target.value)} />
        </Fields>

      </form>

      <Display>

        <div>

          <h1 className="text-center text-xl mb-6">Your Form Data</h1>

          <table className="">
            <tr>
              <td>First Name : </td><td>{Fname}</td>
            </tr>
            <tr>
              <td>Lasr Name : </td><td>{Lname}</td>
            </tr>
            <tr>
              <td>Email : </td><td>{email}</td>
            </tr>
            <tr>
              <td>Password : </td><td>{pwd}</td>
            </tr>
            <tr>
              <td>Confirm Password : </td><td>{Confirm}</td>
            </tr>
          </table>

        </div>

      </Display>

    </div>
  )
}

export default App