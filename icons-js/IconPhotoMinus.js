import Svg, { Path } from 'react-native-svg';
         
function IconPhotoMinus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-minus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 8h.01" /><Path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v9" /><Path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4" /><Path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2 2" /><Path d="M16 19h6" /></Svg>;

}
export default IconPhotoMinus;
        