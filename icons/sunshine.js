import Svg, { Path, Line } from "react-native-svg";

function IconSunshine({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg className="icon icon-tabler icon-tabler-sunshine" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0" /><Line x1={3} y1={21} x2={21} y2={21} /><Path d="M12 3v6l3 -3m-6 0l3 3" /></Svg>;
}

export default IconSunshine;