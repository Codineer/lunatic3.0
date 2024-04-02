'use server'

import { upload } from "@/lib/cloudinary-service"
import { revalidatePath } from "next/cache"

export const create = async (formData, path) => {
    try {
        const data = await upload(formData, path.split('/').pop())
        revalidatePath(path)
        return data.secure_url
    }
    catch {
        return null
    }
}
