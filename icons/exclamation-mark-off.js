import Svg, { Path } from "react-native-svg";

function IconExclamationMarkOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-exclamation-mark-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 19v.01" /><Path d="M12 15v-3m0 -4v-3" /><Path d="M3 3l18 18" /></Svg>;
}

export default IconExclamationMarkOff;