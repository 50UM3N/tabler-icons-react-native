import Svg, { Path, Line } from "react-native-svg";

function IconArrowsRight({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={21} y1={17} x2={3} y2={17} /><Path d="M18 4l3 3l-3 3" /><Path d="M18 20l3 -3l-3 -3" /><Line x1={21} y1={7} x2={3} y2={7} /></Svg>;
}

export default IconArrowsRight;