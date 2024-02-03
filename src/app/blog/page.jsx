import { getPosts } from "@/lib/data"
import PostCard from "../../components/postCard/PostCard"
import styles from './blog.module.css'

const BlogPage = async () => {
  const posts = await getPosts()
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post._id} className={styles.post}>
          <PostCard post={post} />
        </div>
      ))
      }
    </div>
  )
}

export default BlogPage