import Svg, { Path, Rect } from "react-native-svg";

function IconDeviceWatchStats({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-watch-stats" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={6} y={6} width={12} height={12} rx={3} /><Path d="M9 18v3h6v-3" /><Path d="M9 6v-3h6v3" /><Path d="M9 14v-4" /><Path d="M12 14v-1" /><Path d="M15 14v-3" /></Svg>;
}

export default IconDeviceWatchStats;