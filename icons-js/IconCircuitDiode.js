import Svg, { Path } from 'react-native-svg';
         
function IconCircuitDiode({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circuit-diode" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M22 12h-6" /><Path d="M2 12h6" /><Path d="M8 7l8 5l-8 5z" /><Path d="M16 7v10" /></Svg>;

}
export default IconCircuitDiode;
        