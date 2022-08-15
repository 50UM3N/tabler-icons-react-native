import Svg, { Path, Line } from "react-native-svg";

function IconPennant({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pennant" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={8} y1={21} x2={12} y2={21} /><Line x1={10} y1={21} x2={10} y2={3} /><Path d="M10 4l9 4l-9 4" /></Svg>;
}

export default IconPennant;