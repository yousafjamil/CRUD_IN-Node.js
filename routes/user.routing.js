const  router=require('express').Router();
const UserController=require('../controller/user.controller');


router.post('/adduserDetail',UserController.AddUser);

///////////All User Detail  route
router.get('/alluser',UserController.AllUser);

////////////User Front form  routes////////
router.get('/',UserController.UserAddForm);
///Delete user route
router.get('/DeteteUser/:id', UserController.DeleteUser)

//Edit  User Details
router.get('/Edituser/:id',UserController.EditUser)

///update user route
router.post('/update/:id',UserController.updateUser)

module.exports=router;