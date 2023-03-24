import Svg, { Path } from 'react-native-svg';
                    
function IconClockCode({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock-code" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.931 13.111a9 9 0 1 0 -9.453 7.874" /><Path d="M20 21l2 -2l-2 -2" /><Path d="M17 17l-2 2l2 2" /><Path d="M12 7v5l2 2" /></Svg>;

}
export default IconClockCode;
                    