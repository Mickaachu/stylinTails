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
    res.json({message: "Pet added successfully"})

    } catch (error) {
        console.log(error)
        res.json({Error: "An error occured"})
    }
}

export { addPet };