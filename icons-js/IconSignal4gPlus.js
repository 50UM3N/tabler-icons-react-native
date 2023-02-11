import Svg, { Path } from 'react-native-svg';
                    
function IconSignal4gPlus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-signal-4g-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 8v5h5" /><Path d="M7 8v8" /><Path d="M15 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" /><Path d="M18 12h4" /><Path d="M20 10v4" /></Svg>;

}
export default IconSignal4gPlus;
                    