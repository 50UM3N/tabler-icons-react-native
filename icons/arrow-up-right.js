import Svg, { Path, Line, Polyline } from "react-native-svg";

function IconArrowUpRight({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={17} y1={7} x2={7} y2={17} /><Polyline points="8 7 17 7 17 16" /></Svg>;
}

export default IconArrowUpRight;