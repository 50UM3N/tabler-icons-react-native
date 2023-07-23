import Svg, { Path } from 'react-native-svg';
         
function IconClockPlay({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock-play" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 7v5l2 2" /><Path d="M17 22l5 -3l-5 -3z" /><Path d="M13.017 20.943a9 9 0 1 1 7.831 -7.292" /></Svg>;

}
export default IconClockPlay;
        