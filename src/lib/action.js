"use server"

import { revalidatePath } from "next/cache"
import { ConnectToDb } from "./utils"
import { Post } from "./models"

export const createPost = async(formData) => {
    const { title, desc, slug, userId } = Object.fromEntries(formData)

    try {
        ConnectToDb()
        const post = new Post({
            title,
            desc,
            slug,
            userId
        })
        await post.save()
        console.log(title, desc, slug, userId);
        revalidatePath('/blog')
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = async (formData) => {
   const { id } = Object.fromEntries(formData)

    try {
        ConnectToDb()
        await Post.findByIdAndDelete(id)
        console.log('post deleted');
        revalidatePath('/blog')
    } catch (error) {
        console.log(error)
    }
}