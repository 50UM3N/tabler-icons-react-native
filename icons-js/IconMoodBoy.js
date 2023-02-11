import Svg, { Path } from 'react-native-svg';
                    
function IconMoodBoy({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-boy" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 4.5a9 9 0 0 1 3.864 5.89a2.5 2.5 0 0 1 -.29 4.36a9 9 0 0 1 -17.137 0a2.5 2.5 0 0 1 -.29 -4.36a9 9 0 0 1 3.746 -5.81" /><Path d="M9.5 16a3.5 3.5 0 0 0 5 0" /><Path d="M8.5 2c1.5 1 2.5 3.5 2.5 5" /><Path d="M12.5 2c1.5 2 2 3.5 2 5" /><Path d="M9 12l.01 0" /><Path d="M15 12l.01 0" /></Svg>;

}
export default IconMoodBoy;
                    