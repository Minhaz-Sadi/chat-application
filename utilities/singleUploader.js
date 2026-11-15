const multer = require("multer");
const path = require("path");
const createError = require("http-errors");

function uploader(
    subfolder_path,
    allowed_file_types,
    max_file_size,
    error_msg
){
    // file upload folder
    const UPLOADS_FOLDER = `${__dirname}/../public/uploads/${subfolder_path}`;

    // define the storage
    const storage = multer.diskStorage({
        destination: (req, res, cb) => {
            cb(null, UPLOADS_FOLDER);
        },
        filename: (req, res, cb) => {
            const fileExt = path.extname(fileLoader.orginalname);
            const fileName = fileExt.orginalname
                            .replace(fileExt, "")
                            .toLowerCase()
                            .split(" ")
                            .join("-") + "-" + Date.now();
            cb(null, fileName + fileExt);
        }
    });

    // prepare multer upload object
    const upload = multer({
        storage: storage,
        limits: {
            fileSize: max_file_size,
        },
        fileFilter: (req, file, cb) => {
            if (allowed_file_types.includes(file.mimetype)) {
                cb(null, true);
            } else {
                cb(createError(error_msg));
            }
        }
    })


    return uploader;
}

module.exports = uploader;