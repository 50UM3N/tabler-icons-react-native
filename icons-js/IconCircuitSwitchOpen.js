import Svg, { Path } from 'react-native-svg';
                    
function IconCircuitSwitchOpen({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circuit-switch-open" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M2 12h2" /><Path d="M20 12h2" /><Path d="M6 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M18 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M7.5 10.5l7.5 -5.5" /></Svg>;

}
export default IconCircuitSwitchOpen;
                    