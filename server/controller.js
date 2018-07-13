module.exports = {
    read:(req,res)=>{
        const db = req.app.get('db');
        db.get_inventory().then(products =>{
            res.status(200).send(products)
        }).catch((err)=>{
            console.log(err);
            res.status(500).send({errorMessage:"Something Went Wrong"})
        })
    },
    create:(req,res)=>{
        const db = req.app.get('db');
        console.log(req.body);
        let {name,price,img_url} = req.body;
        db.create_product([name,price,img_url]).then(result=>{
            res.sendStatus(200)
        }).catch(err=>{
            console.log(err);
            res.status(500).send({errorMessage:'Something Went Wrong'})
        })
    }
}