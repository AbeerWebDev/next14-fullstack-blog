import { Suspense } from 'react'
import styles from './adminPage.module.css'
import AdminPosts from '@/components/adminPosts/AdminPosts'
import AdminPostsForm from '@/components/adminPostsForm/AdminPostsForm'
import AdminUsers from '@/components/adminUsers/AdminUsers'
import AdminUsersForm from '@/components/adminUsersForm/AdminUsersForm'
import { auth } from '@/lib/auth'

const AdminPage = async () => {
  const session = await auth()
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
            <AdminPostsForm userId={session.user.id} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
            <AdminUsersForm />
        </div>
      </div>
    </div>
  )
}

export default AdminPage