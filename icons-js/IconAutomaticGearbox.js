import Svg, { Path } from 'react-native-svg';
         
function IconAutomaticGearbox({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-automatic-gearbox" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 17v4h1a2 2 0 1 0 0 -4h-1z" /><Path d="M17 11h1.5a1.5 1.5 0 0 0 0 -3h-1.5v5" /><Path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M5 7v3a1 1 0 0 0 1 1h3v7a1 1 0 0 0 1 1h3" /><Path d="M9 11h4" /></Svg>;

}
export default IconAutomaticGearbox;
        