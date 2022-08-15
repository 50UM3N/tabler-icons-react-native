import Svg, { Path, Line } from "react-native-svg";

function IconMessageDots({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-dots" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" /><Line x1={12} y1={11} x2={12} y2={11.01} /><Line x1={8} y1={11} x2={8} y2={11.01} /><Line x1={16} y1={11} x2={16} y2={11.01} /></Svg>;
}

export default IconMessageDots;