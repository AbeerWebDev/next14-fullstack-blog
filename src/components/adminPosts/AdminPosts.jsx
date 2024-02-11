import { deletePost } from '@/lib/action';
import styles from './adminPosts.module.css'
import Image from 'next/image';
import { getPosts } from '@/lib/data';

const AdminPosts = async () => {
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <div className={styles.detail}>
            <Image src={post.img || '/noAvatar.png'} alt='' width={50} height={50} />
            <span className={styles.postTitle}>{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name='id' value={post.id} />
            <button className={styles.postButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  )
}

export default AdminPosts