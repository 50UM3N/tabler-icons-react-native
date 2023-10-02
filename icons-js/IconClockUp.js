import Svg, { Path } from 'react-native-svg';
         
function IconClockUp({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.983 12.548a9 9 0 1 0 -8.45 8.436" /><Path d="M19 22v-6" /><Path d="M22 19l-3 -3l-3 3" /><Path d="M12 7v5l2.5 2.5" /></Svg>;

}
export default IconClockUp;
        