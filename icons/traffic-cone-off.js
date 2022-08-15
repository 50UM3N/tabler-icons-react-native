import Svg, { Path } from "react-native-svg";

function IconTrafficConeOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-traffic-cone-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 20h16" /><Path d="M9.4 10h.6m4 0h.6" /><Path d="M7.8 15h7.2" /><Path d="M6 20l3.5 -10.5" /><Path d="M10.5 6.5l.5 -1.5h2l2 6m2 6l1 3" /><Path d="M3 3l18 18" /></Svg>;
}

export default IconTrafficConeOff;