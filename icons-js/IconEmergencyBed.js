import Svg, { Path } from 'react-native-svg';
         
function IconEmergencyBed({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-emergency-bed" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M8 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M4 8l2.1 2.8a3 3 0 0 0 2.4 1.2h11.5" /><Path d="M10 6h4" /><Path d="M12 4v4" /><Path d="M12 12v2l-2.5 2.5" /><Path d="M14.5 16.5l-2.5 -2.5" /></Svg>;

}
export default IconEmergencyBed;
        