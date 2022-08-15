import Svg, { Path, Line } from "react-native-svg";

function IconPlayerSkipBack({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-skip-back" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 5v14l-12 -7z" /><Line x1={4} y1={5} x2={4} y2={19} /></Svg>;
}

export default IconPlayerSkipBack;