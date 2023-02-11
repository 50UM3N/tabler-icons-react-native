import Svg, { Path } from 'react-native-svg';
                    
function IconZzzOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zzz-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 12h6l-6 8h6" /><Path d="M14 4h6l-5.146 6.862m1.146 1.138h4" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconZzzOff;
                    