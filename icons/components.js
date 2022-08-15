import Svg, { Path } from "react-native-svg";

function IconComponents({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-components" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 12l3 3l3 -3l-3 -3z" /><Path d="M15 12l3 3l3 -3l-3 -3z" /><Path d="M9 6l3 3l3 -3l-3 -3z" /><Path d="M9 18l3 3l3 -3l-3 -3z" /></Svg>;
}

export default IconComponents;