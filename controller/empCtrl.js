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
        const updatedUser = await Emp.findByIdAndUpdate(id, req.body, {
            new: true,
        }
        );
        res.json(updatedUser);
    } catch (error) {
        throw new Error(error);
    }
});

//delete

const deleteuser = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        const deleteduser = await Emp.findByIdAndDelete(id);
        res.json(deleteduser);
    } catch (error) {
        throw new Error("error");
    }
})

//login

const LoginUserCtrl=asyncHandler(async(req,res)=>{
    const {email}=req.body;
    try {
        const findUser=await Emp.findOne({email});
        if(!findUser){
            res.status(404).send({
                success: false,
                message: "Wrong user details..!"
            });
        }
        else{
            if(findUser.password ===req.body.password){
                res.status(200).send({
                    success: true,
                    message: "Logged In Successfully..!",
                    data: {
                        token: Math.random()
                    },
                });
            }
            else{
                res.status(401).send({
                    success: false,
                    message: "Invalid Password..!"
                });
            }
        }
    } catch (error) {
        res
        .status(500)
        .send({ message: "Error retrieving user with email=" + req.body.email });
    }

});






module.exports = { createEmp, getalluser, getsingleuser, updateuser, deleteuser,LoginUserCtrl }