import Svg, { Path, Circle } from "react-native-svg";

function IconWallpaper({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wallpaper" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 6h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-12" /><Circle cx={6} cy={18} r={2} /><Path d="M8 18v-12a2 2 0 1 0 -4 0v12" /></Svg>;
}

export default IconWallpaper;