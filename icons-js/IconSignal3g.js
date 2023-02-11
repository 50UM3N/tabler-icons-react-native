import Svg, { Path } from 'react-native-svg';
                    
function IconSignal3g({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-signal-3g" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 8h3a2 2 0 1 1 0 4h-3" /><Path d="M19 8h-3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3v-4h-1" /><Path d="M8 12a2 2 0 1 1 0 4h-3" /></Svg>;

}
export default IconSignal3g;
                    