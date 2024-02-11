import Image from 'next/image'
import styles from './singlePost.module.css'
import PostUser from '@/components/postUser/PostUser'
import { Suspense } from 'react'
import { getPost } from '@/lib/data'

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post?.title,
    description: post?.desc,
  };
};

const SingleBlogPage = async ({params}) => {
  const { slug } = params
  const post = await getPost(slug)
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
       {post?.img && 
       <Image
          src={post.img}
          alt=''
          fill
          className={styles.img}
        />
        }
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
      <div className={styles.detail}>
        {post && 
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId}/>
          </Suspense>
        }
        <div className={styles.detailText}>
          <p className={styles.detailTitle}>Published</p>
          <p className={styles.detailValue}>{post?.createdAt?.slice(4,16)}</p>
        </div>
      </div>
        <div className={styles.content}>
          {post?.desc}
        </div>
      </div>
    </div>
  );
}

export default SingleBlogPage