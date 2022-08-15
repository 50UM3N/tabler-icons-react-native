import Svg, { Path } from "react-native-svg";

function IconDeviceWatchOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-watch-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 6h5a3 3 0 0 1 3 3v5m-.882 3.125a2.99 2.99 0 0 1 -2.118 .875h-6a3 3 0 0 1 -3 -3v-6c0 -.828 .336 -1.578 .878 -2.121" /><Path d="M9 18v3h6v-3" /><Path d="M9 5v-2h6v3" /><Path d="M3 3l18 18" /></Svg>;
}

export default IconDeviceWatchOff;