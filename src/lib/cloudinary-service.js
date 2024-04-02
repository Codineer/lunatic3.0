import { v2 as cloudinary } from 'cloudinary';
import { db } from './db';

cloudinary.config({
    cloud_name: 'dkezztley',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,

})

export async function upload(formData, playlistName) {
    try {

        const file = formData.get('image')
        if (!['image/png', 'image/jpeg', 'image/jpg', 'image/webp'].includes(file.type)) {
            throw Error("Image not found ")
        }
        const arrayBuffer = await file.arrayBuffer()
        const buffer = new Uint8Array(arrayBuffer)
        const data = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({}, function (error, result) {
                if (error) {
                    reject(error);
                }
                resolve(result)

            }).end(buffer)
        }
        )
        const update = await db.playlist.update({
            where: {
                playlistName
            }
            , data: {
                coverImg: data.secure_url
            }
        })
        if (update) {
            return data
        }

    } catch (error) {
        console.log(error.message)
        return null
    }
}
