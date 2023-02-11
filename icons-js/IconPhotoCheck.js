import Svg, { Path } from 'react-native-svg';
                    
function IconPhotoCheck({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-check" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 8h.01" /><Path d="M11 20h-4a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6" /><Path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4" /><Path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0" /><Path d="M15 19l2 2l4 -4" /></Svg>;

}
export default IconPhotoCheck;
                    