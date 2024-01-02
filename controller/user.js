import { v4 as uuidv4 } from 'uuid';


let users =[];    //empty array



// Get All Data

export const getUsers = (req,res) =>{

    res.send(users);
}


// Post user


export const creatUser = (req,res) =>{

    const user = req.body;

    //const userWithId =
   // const userID = uuidv4();
    users.push( { ...user, uniqId:uuidv4() });

    res.send(`User name ${user.firstName} added tothe DB`);

}

//Get Specific User

export const getUser = (req , res) =>{

    // console.log();
    const { id } = req.params; 
 
    const foundUser = users.find((user) => user.uniqId === id);
 
     res.send(foundUser);
 
 }

 //Delete User


 export const deletUser = (req,res)=>{

    const { id } = req.params;
    users = users.filter((user) => user.uniqId !== id);
    res.send(`User deleted id is ${id} from the DB`);
}


//Update User

export const updateUser = (req,res)=>{
    const { id } = req.params;
    
    const {firstName,lastName,age} = req.body;
    const user = users.find((user) => user.uniqId ===id);

    //if(id) user.id = id;

    if(firstName) user.firstName = firstName;
    if(lastName)  user.lastName = lastName;
    if(age)  user.age = age;
        
    


    res.send(`User Updated with id ${id} in the DB`);



    



}
