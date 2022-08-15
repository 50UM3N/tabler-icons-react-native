import Svg, { Path, Line } from "react-native-svg";

function IconComet({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-comet" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15.5 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z" /><Line x1={4} y1={4} x2={11} y2={11} /><Line x1={9} y1={4} x2={12.5} y2={7.5} /><Line x1={4} y1={9} x2={7.5} y2={12.5} /></Svg>;
}

export default IconComet;