import { Router } from "express";
import { User } from "../models/user";

const users: User[] = [];
const router = Router();
type RequestBody = { name: string; password: string };

router.get("/", (req, res, next) => {
  res.status(200).json({ users: users });
});

router.post("/signin", (req, res, next) => {
  const body = req.body as RequestBody;
  const user: User = {
    id: new Date().toISOString(),
    name: body.name,
    password: body.password,
    salt: "my-salt",
  };

  users.push(user);
  return res.status(201).json({ User: user });
});

export default router;
