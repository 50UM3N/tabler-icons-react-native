import Svg, { Path } from 'react-native-svg';
                    
function IconClockPlus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.984 12.535a9 9 0 1 0 -8.468 8.45" /><Path d="M16 19h6" /><Path d="M19 16v6" /><Path d="M12 7v5l3 3" /></Svg>;

}
export default IconClockPlus;
                    