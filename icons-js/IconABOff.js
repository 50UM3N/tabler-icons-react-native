import Svg, { Path } from 'react-native-svg';
                    
function IconABOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-a-b-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 16v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5" /><Path d="M12 12v6" /><Path d="M12 6v2" /><Path d="M16 8h3a2 2 0 1 1 0 4h-3m3 0a2 2 0 0 1 .83 3.82m-3.83 -3.82v-4" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconABOff;
                    