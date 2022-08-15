import Svg, { Path } from "react-native-svg";

function IconShadowOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shadow-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5.634 5.638a9 9 0 0 0 12.728 12.727m1.68 -2.32a9 9 0 0 0 -12.086 -12.088" /><Path d="M16 12h2" /><Path d="M13 15h2" /><Path d="M13 18h1" /><Path d="M13 9h4" /><Path d="M13 6h1" /><Path d="M3 3l18 18" /></Svg>;
}

export default IconShadowOff;