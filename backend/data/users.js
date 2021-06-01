//dummy users data for seeding 
import bcrypt from 'bcryptjs'
const users = [
    {
        name:'Admin User',
        email:'admin@ecom.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin:true
    },
    {
        name:'john doe',
        email:'john@ecom.com',
        password:bcrypt.hashSync('123456', 10),
        isAdmin:true
    },
    {
        name:'jane doe',
        email:'jane@aecom.com',
        password:bcrypt.hashSync('123456', 10),
        isAdmin:true
    },
]

export default users