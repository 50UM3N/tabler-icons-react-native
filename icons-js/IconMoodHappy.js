import Svg, { Path } from 'react-native-svg';
                    
function IconMoodHappy({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-happy" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><Path d="M9 9l.01 0" /><Path d="M15 9l.01 0" /><Path d="M8 13a4 4 0 1 0 8 0h-8" /></Svg>;

}
export default IconMoodHappy;
                    