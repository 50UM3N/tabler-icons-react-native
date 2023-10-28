import Svg, { Path } from 'react-native-svg';
         
function IconPhotoSquareRounded({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-square-rounded" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 8h.01" /><Path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" /><Path d="M3.5 15.5l4.5 -4.5c.928 -.893 2.072 -.893 3 0l5 5" /><Path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2.5 2.5" /></Svg>;

}
export default IconPhotoSquareRounded;
        