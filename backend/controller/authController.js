import { db } from '../db.js'
import bcrypt from 'bcrypt'
export const register = (req, res) => {
  // check existing user
  const querySelect = "SELECT * FROM user WHERE email = ? OR username = ?"
  db.query(querySelect, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err)
    if (data.length) return res.status(409).json("User already exists!");

  })

  // hash the password and create a user

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt)

  const query = "INSERT INTO user (`username`,`email`,`password`) VALUES (?)"

  const values = [
    req.body.username,
    req.body.email,
    hash,
  ]

  db.query(query, [values], (err, data) => {

    if (err) return res.json(err)
    return res.status(200).json("User has been created")

  })
}


export const login = (req, res) => {

}
export const logout = (req, res) => {

}