import css from './home.module.css';


export function Home() {
    return (
        <div className={css.container}>
            <h1 className={css.title}>
                Phonebook Welcome to page{' '}
                <span role="img" aria-label="Telephone icon">
          📱
        </span>
            </h1>
        </div>
    )
}