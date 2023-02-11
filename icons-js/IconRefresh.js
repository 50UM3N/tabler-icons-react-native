import Svg, { Path } from 'react-native-svg';
                    
function IconRefresh({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" /><Path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" /></Svg>;

}
export default IconRefresh;
                    