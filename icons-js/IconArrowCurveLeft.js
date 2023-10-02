import Svg, { Path } from 'react-native-svg';
         
function IconArrowCurveLeft({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-curve-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 7l-4 -4l-4 4" /><Path d="M10 3v4.394a6.737 6.737 0 0 0 3 5.606a6.737 6.737 0 0 1 3 5.606v2.394" /></Svg>;

}
export default IconArrowCurveLeft;
        