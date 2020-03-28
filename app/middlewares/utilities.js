const {objectID} = require('mongodb');

const validateID = (req,res,next) => {
    let id = req.params.id;
    console.log('====================================')
    console.log(objectID)
    console.log('====================================')
    if (!objectID.isValid(id)) {
        res.send({
            notice: "Invalid ID"
        });
    }
    next();
}

module.exports= {
    validateID
}