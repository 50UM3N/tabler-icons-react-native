import Svg, { Path, Line } from "react-native-svg";

function IconMessageCircle({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-circle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" /><Line x1={12} y1={12} x2={12} y2={12.01} /><Line x1={8} y1={12} x2={8} y2={12.01} /><Line x1={16} y1={12} x2={16} y2={12.01} /></Svg>;
}

export default IconMessageCircle;