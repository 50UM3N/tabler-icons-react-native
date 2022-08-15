import Svg, { Path, Circle } from "react-native-svg";

function IconLockOpenOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock-open-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 11h2a2 2 0 0 1 2 2v2m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h4" /><Circle cx={12} cy={16} r={1} /><Path d="M8 11v-3m.347 -3.631a4 4 0 0 1 7.653 1.631" /><Path d="M3 3l18 18" /></Svg>;
}

export default IconLockOpenOff;