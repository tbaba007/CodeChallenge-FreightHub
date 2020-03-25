const express=require('express');
const db=require('../db/db.json');
const router= express.Router();



router.get('/getAll',(req,res)=>{
    res.send(db);
})

router.get('/getById/:id',(req,res,next)=>{
    db.shipments.map(shipment=>{
        if(shipment.id===req.params.id)
        return res.send(shipment)
        
    })
    next('Details Not Found');
  
})
router.put('/update/:id',(req,res,next)=>{
    db.shipments.map(shipment=>{
        if(shipment.id===req.params.id)
        {
            shipment.name=req.body.name
            return res.send(shipment)
        }
       
    })
    next();
    res.send('Could Not Update Details')
    
})


module.exports=router;