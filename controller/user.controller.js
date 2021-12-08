const  User=require('../models/user.model');

class UserController{
    /////////////////////////////////////////
 static UserAddForm=async (req,res)=>{
        res.render('Adduser') 
 };
//////////////////////////////////////////
      static AllUser= async(req,res)=>{
        const  AllUser=await User.find({})
       res.render('allUser',{AllUser})
      };
///////////////////////////////////////

static  AddUser=async(req,res)=>{
    try {
        const  {name,email,salary,role}=req.body;
        if(!name || !email || !salary || !role) return res.json({message:'fill all the requered fields'})
       const Existemail=await User.findOne({email});
       
       if(Existemail) return res.json({message:"duplicate user does not allow to  registered with this email"})
       
       const  newUser=new User({
           name,email,salary,role
       }).save();
       res.redirect('/alluser')

    } catch (error) {
        throw error
    }
 
};

   /////////////////////////////////Delete User////////
static DeleteUser=async(req,res)=>{
    const deleteUser=await User.findByIdAndDelete(req.params.id).exec( (err)=>{
        if(err) throw err;
        res.redirect('/alluser')
    })
};
////////Edit user ///////////
 static EditUser=(req,res)=>{
    const  id=req.params.id;
   User.findById(id).exec((err,data)=>{
       if(err) throw err;
       res.render('EditUser',{EditUser:data})
      })   
 };


/////////////update user////////////////
static  updateUser=async(req,res)=>{
    console.log(req.body.name)
   const  update=await User.findByIdAndUpdate(req.params.id,{
       name:req.body.name,
       email:req.body.email,
       salary:req.body.salary,
       role:req.body.role
   })

   res.redirect('/alluser')
}


}



module.exports=UserController;
