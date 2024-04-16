export function Input({ id, label, ...props }) {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input name={id} id={id} required {...props} />
    </p>
  )
}
