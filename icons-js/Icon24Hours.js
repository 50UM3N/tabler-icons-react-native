import Svg, { Path } from 'react-native-svg';
         
function Icon24Hours({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-24-hours" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 13c.325 2.532 1.881 4.781 4 6" /><Path d="M20 11a8.1 8.1 0 0 0 -15.5 -2" /><Path d="M4 5v4h4" /><Path d="M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" /><Path d="M18 15v2a1 1 0 0 0 1 1h1" /><Path d="M21 15v6" /></Svg>;

}
export default Icon24Hours;
        