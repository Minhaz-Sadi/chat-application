const uploader = require('../../../utilities/singleUploader.js')


function avatarUpload(req, res, next) {
    const upload = uploader(
        "avatar",
        ["image/jpeg", "image/jpg", "image/png"],
        1000000, // max size
        "Only .jpg, jpeg or .png format allowed!" // error message
    );

    // middleware funtion call
    upload.any()(req, res, (err)=>{
        if(err){
            res.status(500).json({
            errors: {
                avatar: {
                    msg: err.message,
                },
            },
        });
    } else{
        next();
    }
    })
}

module.exports = avatarUpload;