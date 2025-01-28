import cs from "./Header.module.scss"

export const Header = () => {
  return (
    <header className={cs.headerWrapper}>
      <section className={cs.btnWrapper}>
        {Array.from({ length: 3 }, (_, i) => (
          <button className={cs.btn} key={i} />
        ))}
      </section>
      <span className={cs.spacer} />
      <h1>demo_project - editor.LSF</h1>
      <span className={cs.spacer} />
    </header>
  )
}
