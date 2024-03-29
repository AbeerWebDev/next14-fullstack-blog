"use server"
import { revalidatePath } from "next/cache"
import { ConnectToDb } from "./utils"
import { Post, User } from "./models"
import { signIn, signOut } from "./auth"
import bcrypt from 'bcryptjs'

export const createPost = async (prevState, formData) => {
  const { title, desc, slug, userId, img } = Object.fromEntries(formData);
  try {
    ConnectToDb();
    const post = new Post({
      title,
      desc,
      slug,
      userId,
      img
    });
    await post.save();
    console.log("post saved");

    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    return { error: "error saving to db" };
  }
};

export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData)

    try {
        ConnectToDb()
        await Post.findByIdAndDelete(id)
        console.log('post deleted');
        revalidatePath('/blog')
        revalidatePath('/admin')
    } catch (error) {
        return {error: 'error deleting from db'}
    }
}
export const createUser = async (prevState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    ConnectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });
    await newUser.save();
    console.log("user saved");
    revalidatePath("/admin");
  } catch (error) {
    return { error: "error saving to db" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    ConnectToDb();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("User deleted");
    revalidatePath("/admin");
  } catch (error) {
    return { error: "error deleting from db" };
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, img, password, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    ConnectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "User already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "error saving to db" };
  }
};

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", {
      username,
      password,
    });
  } catch (error) {
    console.log(error);
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw error;
  }
};