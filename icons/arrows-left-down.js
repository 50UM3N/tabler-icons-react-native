import Svg, { Path } from "react-native-svg";

function IconArrowsLeftDown({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-left-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 3l-4 4l4 4" /><Path d="M3 7h11a3 3 0 0 1 3 3v11" /><Path d="M13 17l4 4l4 -4" /></Svg>;
}

export default IconArrowsLeftDown;