import Svg, { Path } from 'react-native-svg';
         
function IconAirTrafficControl({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-air-traffic-control" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 3h2" /><Path d="M12 3v3" /><Path d="M5.998 6h12.004a2 2 0 0 1 1.916 2.575l-1.8 6a2 2 0 0 1 -1.916 1.425h-8.404a2 2 0 0 1 -1.916 -1.425l-1.8 -6a2 2 0 0 1 1.916 -2.575z" /><Path d="M8.5 6l1.5 10v5" /><Path d="M15.5 6l-1.5 10v5" /></Svg>;

}
export default IconAirTrafficControl;
        