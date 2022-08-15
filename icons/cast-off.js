import Svg, { Path } from "react-native-svg";

function IconCastOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cast-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 19h.01" /><Path d="M7 19a4 4 0 0 0 -4 -4" /><Path d="M11 19a8 8 0 0 0 -8 -8" /><Path d="M15 19h3a3 3 0 0 0 .875 -.13m1.997 -2.002a3 3 0 0 0 .128 -.868v-8a3 3 0 0 0 -3 -3h-9m-3.865 .136a3 3 0 0 0 -1.935 1.864" /><Path d="M3 3l18 18" /></Svg>;
}

export default IconCastOff;