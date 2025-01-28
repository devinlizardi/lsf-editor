import cs from "./Section.module.scss"

type SectionProps = {
  ratio: number
}

export const Section = ({ ratio }: SectionProps) => {
  return (
    <div style={{ height: `${ratio * 100}%` }} className={cs.section}>
      section
    </div>
  )
}
