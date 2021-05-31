import mongoose from 'mongoose'
import colors from 'colors'


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })
        console.log(`MangoDB connected : ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(` Error : ${error.message}`.red.bold)
        process.exit(1)
    }
}

export default connectDB