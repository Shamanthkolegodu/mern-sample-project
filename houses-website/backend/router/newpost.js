const router = require('express').Router();
let NewPost = require('../model/newpost.model');

router.route('/').get((req,res) => {
    NewPost.find()
        .then(newposts => res.json(newposts))
        .catch(err => res.status(400).json('Error:'+err));
});

router.route('/add').post((req,res)=>{
    const price = Number(req.body.price);
    const description = req.body.description;
    const address = String(req.body.address);
    const bhk=Number(req.body.bhk);

    const newPost1 = new NewPost({
        price,
        description,
        address,
        bhk,
    });
    newPost1.save()
    .then(()=> res.json('new post added'))
    .catch(err => res.status(400).json('Error:'+err));
});
/*
router.route('/update/:id').post((req,res)=>{
    NewPost.findById(req.params.id)
    .then(newposts =>{
        newposts.price=Number(req.body.price);
        newposts.description=req.body.description;
        newposts.address=req.body.address;
        newposts.bhk=Number(req.body.bhk);

        newposts.save()
            .then(() => res.json('newpost updated'))
            .catch(err => res.status(400).json('Error:'+err));
    })
    .catch(err =>res.status(400).json('Error:'+err));
});
*/

module.exports=router;