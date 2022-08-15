import Svg, { Path, Line } from "react-native-svg";

function IconHelicopter({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-helicopter" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 10l1 2h6" /><Path d="M12 9a2 2 0 0 0 -2 2v3c0 1.1 .9 2 2 2h7a2 2 0 0 0 2 -2c0 -3.31 -3.13 -5 -7 -5h-2z" /><Line x1={13} y1={9} x2={13} y2={6} /><Line x1={5} y1={6} x2={20} y2={6} /><Path d="M15 9.1v3.9h5.5" /><Line x1={15} y1={19} x2={15} y2={16} /><Line x1={19} y1={19} x2={11} y2={19} /></Svg>;
}

export default IconHelicopter;