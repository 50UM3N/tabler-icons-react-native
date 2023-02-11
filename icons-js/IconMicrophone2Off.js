import Svg, { Path } from 'react-native-svg';
                    
function IconMicrophone2Off({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-microphone-2-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16.908 12.917a5 5 0 1 0 -5.827 -5.819" /><Path d="M10.116 10.125l-6.529 7.46a2 2 0 1 0 2.827 2.83l7.461 -6.529" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconMicrophone2Off;
                    