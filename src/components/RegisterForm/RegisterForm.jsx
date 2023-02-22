import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        )
        form.reset();
    }

    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Name
        <input
          className={css.label}
          type="text"
          name="name"
          placeholder="Name"
        />
      </label>
      <label className={css.label}>
        Email
        <input
          className={css.label}
          type="email"
          name="email"
          placeholder="E-mail"
        />
      </label>
      <label className={css.label}>
        Password
        <input
          className={css.label}
          type="password"
          name="password"
          placeholder="Password"
        />
      </label>
      <button className={css.formBtn} type="submit">
        Register
      </button>
    </form>
  
};
