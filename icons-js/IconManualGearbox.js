import Svg, { Path } from 'react-native-svg';
                    
function IconManualGearbox({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-manual-gearbox" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M12 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M19 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M5 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M5 8l0 8" /><Path d="M12 8l0 8" /><Path d="M19 8v2a2 2 0 0 1 -2 2h-12" /></Svg>;

}
export default IconManualGearbox;
                    