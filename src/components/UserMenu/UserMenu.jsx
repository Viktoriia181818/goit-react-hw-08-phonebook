
import { useDispatch } from 'react-redux';
import { useAuth } from 'components/HookSelector';
import { logOut } from 'redux/auth/operation';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>
        Welcome, <span className={css.logInUser}>{user.name}</span>
      </p>
      <button
        className={css.btnLogin}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
        <span class="material-symbols-outlined">login</span>
      </button>
    </div>
  );
};