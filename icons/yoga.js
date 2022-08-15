import Svg, { Path, Circle } from "react-native-svg";

function IconYoga({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-yoga" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={4} r={1} /><Path d="M4 20h4l1.5 -3" /><Path d="M17 20l-1 -5h-5l1 -7" /><Path d="M4 10l4 -1l4 -1l4 1.5l4 1.5" /></Svg>;
}

export default IconYoga;