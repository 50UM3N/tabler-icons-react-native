import Svg, { Path } from 'react-native-svg';
         
function IconPhotoCircle({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-circle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 8h.01" /><Path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l5 5" /><Path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2 2" /><Path d="M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9" /></Svg>;

}
export default IconPhotoCircle;
        