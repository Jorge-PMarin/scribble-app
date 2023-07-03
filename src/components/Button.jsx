export default function Button({children, styles}) {
  return <button type="submit" className="button" style={styles}>{children}</button>;
}
