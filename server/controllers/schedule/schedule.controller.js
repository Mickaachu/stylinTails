import Schedule from "../../models/Schedule.js"

const addSchedule = async (req, res) => {
    try {
        const {petId, time, date, service, user} = req.body
        if(!petId || !time || !date || !service || !user) return res.json({error: "Please fill all the fields"})
        const schedule = new Schedule({pet: petId, time, date, service, user})
        await schedule.save()
        res.json({message: "Schedule added successfully"})
        
    }
    catch (error) {
        console.log(error)
        res.json({error: "An error occured"})
    }
}

const getAllScedule = async (req, res) => {
    try {
        const {id} = req.params
        const schedule = await Schedule.find({user: id}).populate('pet')
        res.json(schedule)

    }catch(error){
        console.log(error)
        res.json({error: "An error occured"})
    }
}
const updateSchedule = async (req, res) => {
    try{
        const {petId ,time, date, service, _id} = req.body
        await Schedule.findByIdAndUpdate(_id, {pet: petId, time, date, service})
        res.json({message: "Schedule updated successfully"})
    }catch(error) {
        console.log(error)
        res.json({error: "An error occured"})
    }
}
const deleteSchedule = async (req, res) => {
    try{
        const {id} = req.params
        await Schedule.findByIdAndDelete(id)
        res.json({message: "Schedule deleted successfully"})
    }
    catch(error) {
        console.log(error)
        res.json({error: "An error occured"})
    }
}

export {
    addSchedule, getAllScedule, updateSchedule, deleteSchedule
}