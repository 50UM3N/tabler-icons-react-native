import Svg, { Path } from "react-native-svg";

function IconArrowRightBar({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-right-bar" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18 15l3 -3l-3 -3" /><Path d="M3 12h18" /><Path d="M3 9v6" /></Svg>;
}

export default IconArrowRightBar;