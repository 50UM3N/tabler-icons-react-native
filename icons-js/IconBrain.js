import Svg, { Path } from 'react-native-svg';
         
function IconBrain({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brain" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8" /><Path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8" /><Path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5" /><Path d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0" /><Path d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5" /><Path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10" /></Svg>;

}
export default IconBrain;
        