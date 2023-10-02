import Svg, { Path } from 'react-native-svg';
         
function IconPlaylistOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-playlist-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 14a3 3 0 1 0 3 3" /><Path d="M17 13v-9h4" /><Path d="M13 5h-4m-4 0h-2" /><Path d="M3 9h6" /><Path d="M9 13h-6" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconPlaylistOff;
        