import Svg, { Path } from "react-native-svg";

function IconArrowsUpRight({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-up-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 21l4 -4l-4 -4" /><Path d="M21 17h-11a3 3 0 0 1 -3 -3v-11" /><Path d="M11 7l-4 -4l-4 4" /></Svg>;
}

export default IconArrowsUpRight;