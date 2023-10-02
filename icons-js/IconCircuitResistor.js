import Svg, { Path } from 'react-native-svg';
         
function IconCircuitResistor({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circuit-resistor" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M2 12h2l2 -5l3 10l3 -10l3 10l3 -10l1.5 5h2.5" /></Svg>;

}
export default IconCircuitResistor;
        