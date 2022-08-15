import Svg, { Path } from "react-native-svg";

function IconSwitch2({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-switch-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6" /><Path d="M18 4l3 3l-3 3" /><Path d="M3 7h5l7 10h6" /><Path d="M18 20l3 -3l-3 -3" /></Svg>;
}

export default IconSwitch2;