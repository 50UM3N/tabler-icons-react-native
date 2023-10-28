import Svg, { Path } from 'react-native-svg';
         
function IconPhotoVideo({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-video" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 15h-3a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v3" /><Path d="M9 9m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z" /><Path d="M3 12l2.296 -2.296a2.41 2.41 0 0 1 3.408 0l.296 .296" /><Path d="M14 13.5v3l2.5 -1.5z" /><Path d="M7 6v.01" /></Svg>;

}
export default IconPhotoVideo;
        