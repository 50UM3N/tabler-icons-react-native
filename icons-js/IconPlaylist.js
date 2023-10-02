import Svg, { Path } from 'react-native-svg';
         
function IconPlaylist({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-playlist" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><Path d="M17 17v-13h4" /><Path d="M13 5h-10" /><Path d="M3 9l10 0" /><Path d="M9 13h-6" /></Svg>;

}
export default IconPlaylist;
        