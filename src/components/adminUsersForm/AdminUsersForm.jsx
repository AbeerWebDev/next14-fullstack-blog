'use client'
import { createUser } from '@/lib/action'
import styles from './adminUsersForm.module.css'
import { useFormState } from "react-dom";

const AdminUsersForm = () => {
  const [state, formAction] = useFormState(createUser, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New User</h1>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input type="text" name="img" placeholder="img" />
      <select name="isAdmin">
        <option value="false">is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button>Add</button>
      {state?.error}
    </form>
  );
}

export default AdminUsersForm