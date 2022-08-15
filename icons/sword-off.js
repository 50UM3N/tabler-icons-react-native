import Svg, { Path } from "react-native-svg";

function IconSwordOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sword-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11.934 7.942l3.066 -3.942h5v5l-3.93 3.057m-2.253 1.752l-2.817 2.191l-4 4l-3 -3l4 -4l2.174 -2.795" /><Path d="M6.5 11.5l6 6" /><Path d="M3 3l18 18" /></Svg>;
}

export default IconSwordOff;