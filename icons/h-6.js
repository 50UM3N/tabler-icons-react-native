import Svg, { Path, Circle } from "react-native-svg";

function IconH6({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-h-6" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle transform="rotate(180 19 16)" cx={19} cy={16} r={2} /><Path d="M21 12a2 2 0 1 0 -4 0v4" /><Path d="M4 6v12" /><Path d="M12 6v12" /><Path d="M11 18h2" /><Path d="M3 18h2" /><Path d="M4 12h8" /><Path d="M3 6h2" /><Path d="M11 6h2" /></Svg>;
}

export default IconH6;