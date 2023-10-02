import Svg, { Path } from 'react-native-svg';
         
function IconTrafficCone({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-traffic-cone" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 20l16 0" /><Path d="M9.4 10l5.2 0" /><Path d="M7.8 15l8.4 0" /><Path d="M6 20l5 -15h2l5 15" /></Svg>;

}
export default IconTrafficCone;
        