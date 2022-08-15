import Svg, { Path, Circle } from "react-native-svg";

function IconWallpaperOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wallpaper-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 6h8a2 2 0 0 1 2 2v8m-.58 3.409a1.994 1.994 0 0 1 -1.42 .591h-12" /><Circle cx={6} cy={18} r={2} /><Path d="M8 18v-10m-3.427 -3.402c-.353 .362 -.573 .856 -.573 1.402v12" /><Path d="M3 3l18 18" /></Svg>;
}

export default IconWallpaperOff;