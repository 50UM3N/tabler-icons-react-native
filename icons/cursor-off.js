import Svg, { Path } from "react-native-svg";

function IconCursorOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cursor-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 4a3 3 0 0 1 3 3v1m0 9a3 3 0 0 1 -3 3" /><Path d="M15 4a3 3 0 0 0 -3 3v1m0 4v5a3 3 0 0 0 3 3" /><Path d="M3 3l18 18" /></Svg>;
}

export default IconCursorOff;