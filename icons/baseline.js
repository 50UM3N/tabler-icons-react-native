import Svg, { Path } from "react-native-svg";

function IconBaseline({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-baseline" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 20h16" /><Path d="M8 16v-8a4 4 0 1 1 8 0v8" /><Path d="M8 10h8" /></Svg>;
}

export default IconBaseline;