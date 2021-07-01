import Link from "next/link"

const LinkButton = ({ children, styles, url, external, disabled }) => {
  return external ? (
    <a href={url} target="_blank" rel="noreferrer">
      <button disabled={disabled} type="button" className={`${styles} ${disabled ? "disabled:opacity-50" : ""}`}>
        {children}
      </button>
    </a>
  ) : (
    <Link href={url} passHref>
      <button disabled={disabled} type="button" className={`${styles} ${disabled ? "disabled:opacity-50" : ""}`}>
        {children}
      </button>
    </Link>
  )
}
export default LinkButton
