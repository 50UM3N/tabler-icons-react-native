import Svg, { Path, Line } from "react-native-svg";

function IconSmokingNo({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-smoking-no" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={8} y1={13} x2={8} y2={17} /><Path d="M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5" /><Line x1={3} y1={3} x2={21} y2={21} /><Path d="M17 13h3a1 1 0 0 1 1 1v2c0 .28 -.115 .533 -.3 .714m-3.7 .286h-13a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h9" /></Svg>;
}

export default IconSmokingNo;