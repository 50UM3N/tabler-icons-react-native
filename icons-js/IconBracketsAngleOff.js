import Svg, { Path } from 'react-native-svg';
         
function IconBracketsAngleOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brackets-angle-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 4h.01" /><Path d="M6.453 6.474l-3.453 5.526l5 8" /><Path d="M16 4l5 8l-1.917 3.067" /><Path d="M17.535 17.544l-1.535 2.456" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconBracketsAngleOff;
        