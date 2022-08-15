import Svg, { Path } from "react-native-svg";

function IconArrowsCross({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-cross" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 4h4v4" /><Path d="M15 9l5 -5" /><Path d="M4 20l5 -5" /><Path d="M16 20h4v-4" /><Path d="M4 4l16 16" /></Svg>;
}

export default IconArrowsCross;