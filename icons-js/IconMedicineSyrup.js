import Svg, { Path } from 'react-native-svg';
                    
function IconMedicineSyrup({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-medicine-syrup" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 21h8a1 1 0 0 0 1 -1v-10a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v10a1 1 0 0 0 1 1z" /><Path d="M10 14h4" /><Path d="M12 12v4" /><Path d="M10 7v-3a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3" /></Svg>;

}
export default IconMedicineSyrup;
                    