import Svg, { Path, Line, Polyline } from "react-native-svg";

function IconFlipVertical({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-flip-vertical" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={12} y1={3} x2={12} y2={21} /><Polyline points="16 7 16 17 21 17 16 7" /><Polyline points="8 7 8 17 3 17 8 7" /></Svg>;
}

export default IconFlipVertical;