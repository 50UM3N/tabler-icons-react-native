import Svg, { Path } from "react-native-svg";

function IconDisabledOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-disabled-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 7a2 2 0 1 0 -2 -2" /><Path d="M11 11v4h4l4 5" /><Path d="M15 11h1" /><Path d="M7 11.5a5 5 0 1 0 6 7.5" /><Path d="M3 3l18 18" /></Svg>;
}

export default IconDisabledOff;