import mongoose from "mongoose";


const DBConnection = async () => {
    const DB_URL = "mongodb+srv://Immanuel:immanuel@cluster0.rnux5pm.mongodb.net/FileShareDB?retryWrites=true&w=majority"

    try {
        await mongoose.connect(DB_URL, { useNewUrlParser : true})
        console.log('Database connected successfully')
    } catch (error) {
        console.error('Error while connecting with the database ', error.message)
    }
}

export default DBConnection