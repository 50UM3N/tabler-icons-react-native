import Svg, { Path } from 'react-native-svg';
                    
function IconPhoto({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 8l.01 0" /><Path d="M4 4m0 3a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3z" /><Path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" /><Path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" /></Svg>;

}
export default IconPhoto;
                    