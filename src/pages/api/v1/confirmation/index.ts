import fs from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {


// The absolute path of the new file with its name
var filepath = "mynewfile.txt";

fs.writeFile(filepath, JSON.stringify(req.body), (err) => {
    if (err) throw err;

    console.log("The file was succesfully saved [1]!");
}); 

  res.status(200).json({ name: 'John de' })
}
