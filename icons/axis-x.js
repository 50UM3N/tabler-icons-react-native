import Svg, { Path } from "react-native-svg";

function IconAxisX({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-axis-x" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 13v.01" /><Path d="M4 9v.01" /><Path d="M4 5v.01" /><Path d="M17 20l3 -3l-3 -3" /><Path d="M4 17h16" /></Svg>;
}

export default IconAxisX;