import Svg, { Path } from 'react-native-svg';
         
function IconPhotoCircleMinus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-circle-minus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 8h.01" /><Path d="M20.475 15.035a9 9 0 0 0 -8.475 -12.035a9 9 0 0 0 -9 9a9 9 0 0 0 9.525 8.985" /><Path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4" /><Path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2 2" /><Path d="M16 19h6" /></Svg>;

}
export default IconPhotoCircleMinus;
        