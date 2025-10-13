import prisma  from "@/lib/prisma"

const authSeller = async (userId)=>{
try {
    const user = await prisma.user.findUnique({
        where: {id: userId},
        include: {store: true}
    });

    console.log("authSeller - User:", user?.id, "Store:", user?.store)

    if (user.store){
        console.log("authSeller - Store status:", user.store.status, "isActive:", user.store.isActive)
        if(user.store.status === "approved" && user.store.isActive === true){
            console.log("authSeller - Authorized, returning store ID:", user.store.id)
            return user.store.id
        }
    }else{
        console.log("authSeller - No store found for user")
        return false
    }
} catch (error) {
    console.error("authSeller - Error:", error)
    return false
}
}

export default authSeller;