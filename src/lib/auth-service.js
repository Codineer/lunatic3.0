import { db } from "./db";
import { currentUser } from "@clerk/nextjs";

export const getSelf = async () => {
    const self = await currentUser()
    if (!self || !self.id) {
        throw new Error("Unauthorized")
    }
    const user = await db.user.findUnique({
        where: {
            externalUserId: self.id
        }
    })
    if (!user) {
        throw new Error("Not Found")
    }
    return user
}