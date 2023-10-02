import Svg, { Path } from 'react-native-svg';
         
function IconTrafficLights({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-traffic-lights" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 2m0 5a5 5 0 0 1 5 -5h0a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h0a5 5 0 0 1 -5 -5z" /><Path d="M12 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M12 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></Svg>;

}
export default IconTrafficLights;
        