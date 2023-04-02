const Emp = require("../model/userModel");

const asyncHandler = require("express-async-handler");


//create

const createEmp = asyncHandler(async (req, res) => {
    try {
        const newemp = await Emp.create(req.body);
        res.json(newemp);
    } catch (error) {
        throw new Error(error);
    }
});

//get
const getalluser = asyncHandler(async (req, res) => {
    try {
        const getalluser = await Emp.find();
        res.json(getalluser);
    } catch (error) {
        throw new Error(error);
    }
})

//get a single user

const getsingleuser = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        const getsingleuser = await Emp.findById(id)
        res.json(getsingleuser);
    } catch (error) {
        throw new Error(error)
    }
})

//update
const updateuser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const updatedUser = await Emp.findByIdAndUpdate(id, req.body,{
                new: true,
            }
        );
        res.json(updatedUser);
    } catch (error) {
        throw new Error(error);
    }
});

//delete

const deleteuser=asyncHandler(async(req,res)=>{
    const {id}=req.params
    try {
    const deleteduser=await Emp.findByIdAndDelete(id);
        res.json(deleteduser);
    } catch (error) {
        throw new Error("error");
    }
})



module.exports = { createEmp, getalluser, getsingleuser,updateuser,deleteuser }