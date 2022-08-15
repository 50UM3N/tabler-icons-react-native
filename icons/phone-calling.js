import Svg, { Path, Line } from "react-native-svg";

function IconPhoneCalling({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-calling" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /><Line x1={15} y1={7} x2={15} y2={7.01} /><Line x1={18} y1={7} x2={18} y2={7.01} /><Line x1={21} y1={7} x2={21} y2={7.01} /></Svg>;
}

export default IconPhoneCalling;