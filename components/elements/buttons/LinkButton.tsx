import Link from "next/link"

const LinkButton = ({ children, styles, url, external, disabled }) => {
  return external ? (
    <a href={url} target="_blank">
      <button disabled={disabled} type="button" className={styles}>
        {children}
      </button>
    </a>
  ) : (
    <Link href={url}>
      <button disabled={disabled} type="button" className={styles}>
        {children}
      </button>
    </Link>
  )
}
export default LinkButton
