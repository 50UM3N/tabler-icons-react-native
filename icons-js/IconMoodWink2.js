import Svg, { Path } from 'react-native-svg';
                    
function IconMoodWink2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-wink-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" /><Path d="M9 10h-.01" /><Path d="M14.5 15a3.5 3.5 0 0 1 -5 0" /><Path d="M15.5 8.5l-1.5 1.5l1.5 1.5" /></Svg>;

}
export default IconMoodWink2;
                    