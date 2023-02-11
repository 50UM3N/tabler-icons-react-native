import Svg, { Path } from 'react-native-svg';
                    
function IconClockStop({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock-stop" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21 12a9 9 0 1 0 -9 9" /><Path d="M12 7v5l1 1" /><Path d="M16 16h6v6h-6z" /></Svg>;

}
export default IconClockStop;
                    