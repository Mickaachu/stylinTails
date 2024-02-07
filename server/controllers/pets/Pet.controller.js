import Pet from '../../models/Pets.js'
import User from '../../models/User.js'
const addPet = async (req, res) => {
    try {
        const {name, breed, user} = req.body;
    if(!name || !breed) return res.json({Error: "Please fill all the fields"})

    const pet = await Pet.findOne({name})
    if(pet) return res.json({Error: "Pet already exist"})

    const newPet = new Pet({name, breed, owner:user})
    await newPet.save()
    const userPets = await User.findById(user)
    userPets.pets.push(newPet._id)
    await userPets.save()
    const petList = await User.findById(user).populate('pets')

    res.json({message: "Pet added successfully", pets: petList.pets})

    } catch (error) {
        console.log(error)
        res.json({Error: "An error occured"})
    }
}
const getUserPets = async (req, res) => {
    try {
        const {id} = req.params
        const user = await User.findById(id).populate('pets')
        res.json(user.pets)
    }
    catch (error) {
        console.log(error)
        res.json({error: "An error occured"})
    }
}
const deletePet = async (req, res) => {
    try {
        const {user,id} = req.params
        const userPets = await User.findById(user)
        await Pet.findByIdAndDelete(id)
        userPets.pets.pull(id)
        await userPets.save()
        const petList = await User.findById(user).populate('pets')
        res.json({message: "Pet deleted successfully", pets: petList.pets})
    }
    catch (error) {
        console.log(error)
        res.json({error: "An error occured"})
    }
}

export { addPet, getUserPets, deletePet };