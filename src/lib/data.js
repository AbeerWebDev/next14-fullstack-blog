import { Post, User } from "./models";
import { ConnectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
    try {
        ConnectToDb()
        const posts = await Post.find();
        return posts;
    }   catch (error) {     
        console.error(error);
        throw new Error('Error fetching posts');
    }
}

export const getPost = async (slug) => {
    try {
      ConnectToDb();
      const posts = await Post.findOne({slug});
      return posts;
    } catch (error) {
      console.error(error);
      throw new Error("Error fetching posts");
    }
}

export const getUser = async (id) => {
    noStore();
    try {
      ConnectToDb();
      const user = await User.findById(id);
      return user;
    } catch (error) {
      console.error(error);
      throw new Error("Error fetching user");
    }
}

export const getUsers = async () => {
    try {
      ConnectToDb();
      const users = await User.find();
      return users;
    } catch (error) {
      console.error(error);
      throw new Error("Error fetching users");
    }
}