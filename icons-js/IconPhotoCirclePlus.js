import Svg, { Path } from 'react-native-svg';
         
function IconPhotoCirclePlus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-circle-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 8h.01" /><Path d="M20.964 12.806a9 9 0 0 0 -8.964 -9.806a9 9 0 0 0 -9 9a9 9 0 0 0 9.397 8.991" /><Path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4" /><Path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0" /><Path d="M16 19.33h6" /><Path d="M19 16.33v6" /></Svg>;

}
export default IconPhotoCirclePlus;
        