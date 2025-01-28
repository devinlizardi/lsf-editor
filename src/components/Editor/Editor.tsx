import { Header } from "../Header/Header"
import { View } from "../View/View"
import cs from "./Editor.module.scss"

export const Editor = () => {
  return (
    <div className={cs.editorWrapper}>
      <Header />
      <div className={cs.viewsWrapper}>
        <View width="30%" ratio={1} />
        <View width="70%" ratio={0.6} />
      </div>
    </div>
  )
}
