const express = require('express');
const router = express.Router();

const Contacts = require('../models/contacts');


//reteriving data
router.get('/contacts',(req,res,next) =>{
    Contacts.find((err, contacts)=>{
        res.json(contacts);
    });
});

//add cotact
router.post('/contact',(req, res, next) =>{
    let newContatct = new Contacts({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone_no: req.body.phone_no
    });

    newContatct.save((err,contact) =>{
        if(err){
            console.log(err);
            res.json({msg: 'Failed to add contacts.'})
        }
        else{
            console.log(contact);
            res.json({msg: 'Contact added successfully.'});        
        }
    });

});

//delete contact
router.delete('/contact/:id',(req, res, next)=>{
    Contacts.deleteOne({_id: req.params.id},(err,result)=>{
        if(err){
            console.log('error in deleting.');
            res.json(err);
        }
        else{
            console.log('successful in deleting.');
            res.json(result);        
        } 
    });
});


module.exports = router;