import Svg, { Path } from 'react-native-svg';
                    
function IconClockShare({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock-share" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.943 13.016a9 9 0 1 0 -8.915 7.984" /><Path d="M16 22l5 -5" /><Path d="M21 21.5v-4.5h-4.5" /><Path d="M12 7v5l2 2" /></Svg>;

}
export default IconClockShare;
                    