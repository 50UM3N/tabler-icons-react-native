import Svg, { Path } from 'react-native-svg';
         
function IconClockX({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock-x" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.926 13.15a9 9 0 1 0 -7.835 7.784" /><Path d="M12 7v5l2 2" /><Path d="M22 22l-5 -5" /><Path d="M17 22l5 -5" /></Svg>;

}
export default IconClockX;
        