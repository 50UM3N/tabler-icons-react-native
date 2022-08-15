import Svg, { Path } from "react-native-svg";

function IconDialpadOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dialpad-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 7h-4v-4" /><Path d="M17 3h4v4h-4z" /><Path d="M10 6v-3h4v4h-3" /><Path d="M3 10h4v4h-4z" /><Path d="M17 13v-3h4v4h-3" /><Path d="M14 14h-4v-4" /><Path d="M10 17h4v4h-4z" /><Path d="M3 3l18 18" /></Svg>;
}

export default IconDialpadOff;