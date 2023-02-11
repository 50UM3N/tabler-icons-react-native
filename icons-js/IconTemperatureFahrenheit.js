import Svg, { Path } from 'react-native-svg';
                    
function IconTemperatureFahrenheit({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-temperature-fahrenheit" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M13 12l5 0" /><Path d="M20 6h-6a1 1 0 0 0 -1 1v11" /></Svg>;

}
export default IconTemperatureFahrenheit;
                    