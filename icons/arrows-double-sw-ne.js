import Svg, { Path } from "react-native-svg";

function IconArrowsDoubleSwNe({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-double-sw-ne" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 3l-11 11" /><Path d="M3 10v4h4" /><Path d="M17 10h4v4" /><Path d="M10 21l11 -11" /></Svg>;
}

export default IconArrowsDoubleSwNe;