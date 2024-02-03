import { getUser } from '@/lib/data';
import styles from './postUser.module.css'
import Image from 'next/image'

const PostUser = async ({userId}) => {
  const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user.img ? user.img : '/noavatar.png'}
        alt=""
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <p className={styles.title}>Author</p>
        <p className={styles.username}>{user?.username}</p>
      </div>
    </div>
  );
}

export default PostUser