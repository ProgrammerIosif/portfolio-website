import { themeIcons } from "seti-icons"

export const fileIcons = {
  name: "fileIcons",
  TabContent: MyTab,
}

function MyTab(props) {
  const { title } = props

  const { svg, color } = getDarkIcon(title)
  const __html = svg.replace(/svg/, `svg fill='${color}'`)
  return (
    <div className="flex items-center h-6 -ml-2 text-lg text-primary font-sembold">
      <span
        dangerouslySetInnerHTML={{ __html }}
        className="inline-block w-8 mr-1 my-[-0.5em]"
      />
      {title}
    </div>
  )
}

const getDarkIcon = themeIcons({
  blue: "#519aba",
  grey: "#4d5a5e",
  "grey-light": "#6d8086",
  green: "#8dc149",
  orange: "#e37933",
  pink: "#f55385",
  purple: "#a074c4",
  red: "#cc3e44",
  white: "#d4d7d6",
  yellow: "#cbcb41",
  ignore: "#41535b",
})
