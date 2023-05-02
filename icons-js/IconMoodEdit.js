import Svg, { Path } from 'react-native-svg';
                    
function IconMoodEdit({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-edit" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.955 11.104a9 9 0 1 0 -9.895 9.847" /><Path d="M9 10h.01" /><Path d="M15 10h.01" /><Path d="M9.5 15c.658 .672 1.56 1 2.5 1c.126 0 .251 -.006 .376 -.018" /><Path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z" /></Svg>;

}
export default IconMoodEdit;
                    