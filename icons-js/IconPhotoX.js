import Svg, { Path } from 'react-native-svg';
                    
function IconPhotoX({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-x" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 8h.01" /><Path d="M13 20h-6a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6" /><Path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l2.5 2.5" /><Path d="M21.5 21.5l-5 -5" /><Path d="M16.5 21.5l5 -5" /></Svg>;

}
export default IconPhotoX;
                    