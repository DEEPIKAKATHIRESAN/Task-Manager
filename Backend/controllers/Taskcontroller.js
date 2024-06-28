const taskmodel = require('../models/TaskModel');
const mongoose=require("mongoose");
const createtask = async (req, res) => {
    const { title, description } = req.body;
    try {
        const task = await taskmodel.create({ title, description });
        res.status(200).json(task);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

const getTasks=async(req,res)=>{
    try{
        const tasks=await taskmodel.find({});
        res.status(200).json(tasks)
    }catch(e){
        res.status(400).json({ error: e.message });
    }
};
const getSingleTask=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"task not found"})
    }
    try{
        const singletask=await taskmodel.findById(id)
        res.status(200).json(singletask)
    }catch(e){
        res.status(400).json({ error: e.message });
    }

};

const updateTask=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"task not found"})
    }
    try{
        const task=await taskmodel.findByIdAndUpdate({
            _id:id
        },
    {
        ...req.body
    })
    res.status(200).json(task);
    }
    catch(e){
        res.status(400).json({ error: e.message });
    }
};
const DeleteTask=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"task not found"})
    }
    try{
        const task=await taskmodel.findByIdAndDelete(id)

  
    res.status(200).json(task);
    }
    catch(e){
        res.status(400).json({ error: e.message });
    }
}
module.exports = { createtask,getTasks,getSingleTask,updateTask,DeleteTask};


