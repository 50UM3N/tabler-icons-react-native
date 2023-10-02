import Svg, { Path } from 'react-native-svg';
         
function IconUserEdit({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-edit" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><Path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" /><Path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z" /></Svg>;

}
export default IconUserEdit;
        