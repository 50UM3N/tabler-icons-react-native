import Svg, { Path } from 'react-native-svg';
                    
function IconDevicesPc({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-devices-pc" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 5h6v14h-6z" /><Path d="M12 9h10v7h-10z" /><Path d="M14 19h6" /><Path d="M17 16v3" /><Path d="M6 13v.01" /><Path d="M6 16v.01" /></Svg>;

}
export default IconDevicesPc;
                    