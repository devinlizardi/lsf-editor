import { Section } from "../Section/Section"
import cs from "./View.module.scss"

type ViewProps = {
  width: string
  ratio: number
}

export const View = ({ width, ratio }: ViewProps) => {
  return (
    <div className={cs.view} style={{ width }}>
      <Section ratio={ratio} />
      {ratio < 1 && <Section ratio={1 - ratio} />}
    </div>
  )
}
