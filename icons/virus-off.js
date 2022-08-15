import Svg, { Path, Line } from "react-native-svg";

function IconVirusOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-virus-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={3} y1={3} x2={21} y2={21} /><Path d="M8.469 8.46a5 5 0 0 0 7.058 7.084m1.386 -2.608a5 5 0 0 0 -5.826 -5.853" /><Path d="M12 7v-4m-1 0h2" /><Path d="M12 7v-4m-1 0h2" transform="rotate(45 12 12)" /><Path d="M12 7v-4m-1 0h2" transform="rotate(90 12 12)" /><Line x1={12} y1={3} x2={13} y2={3} transform="rotate(135 12 12)" /><Path d="M12 7v-4m-1 0h2" transform="rotate(180 12 12)" /><Path d="M12 7v-4m-1 0h2" transform="rotate(225 12 12)" /><Path d="M12 7v-4m-1 0h2" transform="rotate(270 12 12)" /><Line x1={12} y1={3} x2={11} y2={3} transform="rotate(315 12 12)" /></Svg>;
}

export default IconVirusOff;