import Svg, { Path, Line } from "react-native-svg";

function IconPhotoOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-photo-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={3} y1={3} x2={21} y2={21} /><Line x1={15} y1={8} x2={15.01} y2={8} /><Path d="M19.121 19.122a3 3 0 0 1 -2.121 .878h-10a3 3 0 0 1 -3 -3v-10c0 -.833 .34 -1.587 .888 -2.131m3.112 -.869h9a3 3 0 0 1 3 3v9" /><Path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l5 5" /><Path d="M16.32 12.34c.577 -.059 1.162 .162 1.68 .66l2 2" /></Svg>;
}

export default IconPhotoOff;