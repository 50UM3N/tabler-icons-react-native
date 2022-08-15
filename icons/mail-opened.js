import Svg, { Path, Polyline, Line } from "react-native-svg";

function IconMailOpened({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail-opened" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="3 9 12 15 21 9 12 3 3 9" /><Path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" /><Line x1={3} y1={19} x2={9} y2={13} /><Line x1={15} y1={13} x2={21} y2={19} /></Svg>;
}

export default IconMailOpened;