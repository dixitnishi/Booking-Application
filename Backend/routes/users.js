import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken";

const router = express.Router();

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("Hello user you are authenticated")
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("Hello user, you are logged in you can delete the your account")
// })

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("Hello admin, you are logged in you can delete the your account")
// })

router.put("/:id", verifyUser, updateUser);

router.delete("/:id", verifyUser, deleteUser);

router.get("/:id", verifyUser, getUser);

router.get("/", verifyAdmin, getUsers);

export default router;
