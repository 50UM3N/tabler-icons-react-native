import Svg, { Path } from 'react-native-svg';
         
function IconCircuitBulb({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circuit-bulb" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M2 12h5" /><Path d="M17 12h5" /><Path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" /><Path d="M8.5 8.5l7 7" /><Path d="M15.5 8.5l-7 7" /></Svg>;

}
export default IconCircuitBulb;
        