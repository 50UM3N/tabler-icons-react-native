import Svg, { Path } from 'react-native-svg';
                    
function Icon2fa({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-2fa" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54" /><Path d="M10 16v-8h4" /><Path d="M10 12l3 0" /><Path d="M17 16v-6a2 2 0 0 1 4 0v6" /><Path d="M17 13l4 0" /></Svg>;

}
export default Icon2fa;
                    