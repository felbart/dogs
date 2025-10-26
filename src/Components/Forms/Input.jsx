import styles from './Input.module.css'

const Input = ({ label, type, name, value, onChange, onBlur, error  }) => {
  return (
    <div className={styles.wrapper}>
        <label htmlFor={name} className={styles.label}>{label}</label>
        <input id={name}
        className={styles.input}
        value={value}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        />
        {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default Input