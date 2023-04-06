const express=require("express");
const { createEmp, getalluser, getsingleuser, updateuser, deleteuser, LoginUserCtrl } = require("../controller/empCtrl");

const router=express.Router();

router.post("/reg",createEmp);
router.get("/all",getalluser);
router.get("/:id",getsingleuser);
router.put("/:id",updateuser);
router.delete("/:id",deleteuser);
router.post("/login",LoginUserCtrl)





module.exports=router;