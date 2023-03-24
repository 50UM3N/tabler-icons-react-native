import Svg, { Path } from 'react-native-svg';
                    
function IconClockPause({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock-pause" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.942 13.018a9 9 0 1 0 -7.909 7.922" /><Path d="M12 7v5l2 2" /><Path d="M17 17v5" /><Path d="M21 17v5" /></Svg>;

}
export default IconClockPause;
                    