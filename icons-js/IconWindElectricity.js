import Svg, { Path } from 'react-native-svg';
         
function IconWindElectricity({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wind-electricity" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 7l-3 5h4l-3 5" /><Path d="M3 16h4a2 2 0 1 1 0 4" /><Path d="M3 12h8a2 2 0 1 0 0 -4" /><Path d="M3 8h3a2 2 0 1 0 0 -4" /></Svg>;

}
export default IconWindElectricity;
        