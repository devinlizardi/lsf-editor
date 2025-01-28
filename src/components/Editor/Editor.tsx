import { Header } from "../Header/Header"
import cs from "./Editor.module.scss"

export const Editor = () => {
  return (
    <div className={cs.editorWrapper}>
      <Header />
    </div>
  )
}
