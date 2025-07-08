import { fileTypeFromBuffer } from 'file-type'
import fs from 'fs';


const checkFiletype = async (req, res, next) => {
    const filepath = await req.file.path
    const fileBuffur = fs.readFileSync(filepath)
    const type = await fileTypeFromBuffer(fileBuffur);
    const allowedMimeTypes = [
        "image/jpeg",
        "image/png",
        "image/webp",
        "video/mp4",
        "video/quicktime",
        "video/3gpp",
        "video/mpeg",
        "video/x-m4v"
    ];

    if (!type || !allowedMimeTypes.includes(type.mime)) {

        fs.unlink(filepath, (error) => error ? console.log(error) : console.log('delete Success'))

       return res.status(500).json({
            message: "invalid file type",
            status: "operation failed"
        })
    }

    next();
}

export default checkFiletype;