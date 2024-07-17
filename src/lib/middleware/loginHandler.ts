import { NextApiRequest, NextApiResponse } from "next";
const loginHandler = (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method === 'POST') {
    const { username, password } = req.body
    //Backend Code
    // if(username=="" || password===""){
    //     res.
    // }
    if (username === 'user' && password === 'password') {
      res.status(200).json({ message: 'Login successful' })
    }
    else {
      res.status(401).json({ message: "Invalid username or password" })
    }
  }
  else {
    res.status(405).json({ message: "Method not allowed" })
  }

}

export default loginHandler