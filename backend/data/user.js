 import bcrypt from 'bcryptjs'
const users =[
    {
        name:'krishna',
        email:'krishna123@gmail.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true,
    },
    {
        name:'venkata',
        email:'venkata123@gmail.com',
        password:bcrypt.hashSync('123456',10),
    
    },
    {
        name:'rao',
        email:'rao123@gmail.com',
        password:bcrypt.hashSync('123456',10),
        
    },
] 

export default users