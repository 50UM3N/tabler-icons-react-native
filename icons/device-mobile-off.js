import Svg, { Path } from "react-native-svg";

function IconDeviceMobileOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-mobile-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7.174 3.178c.252 -.114 .531 -.178 .826 -.178h8a2 2 0 0 1 2 2v9m0 4v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-13" /><Path d="M11 4h2" /><Path d="M12 17v.01" /><Path d="M3 3l18 18" /></Svg>;
}

export default IconDeviceMobileOff;