'use client'

import Link from 'next/link';
import styles from './registerForm.module.css'
import { register } from '@/lib/action'
import { useRouter } from 'next/navigation';
import { useFormState } from "react-dom";
import { useEffect } from 'react';

const RegisterForm = () => {
    const [state, formAction] = useFormState(register, undefined);
    const router = useRouter()

    useEffect(() => {
        state?.success && router.push('/login')
        }
    , [state?.success, router])

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Username" name="username" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <input
        type="password"
        placeholder="Confirm Password"
        name="passwordRepeat"
      />
      <button>Register</button>
      {state?.error}
      <Link href="/login">
          Already have an account? <b>Login</b>
      </Link>
    </form>
  );
}

export default RegisterForm