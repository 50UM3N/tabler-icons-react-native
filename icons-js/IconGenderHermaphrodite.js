import Svg, { Path } from 'react-native-svg';
         
function IconGenderHermaphrodite({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gender-hermaphrodite" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 14v7" /><Path d="M9 18h6" /><Path d="M12 6a4 4 0 1 1 0 8a4 4 0 0 1 0 -8z" /><Path d="M15 3a3 3 0 1 1 -6 0" /></Svg>;

}
export default IconGenderHermaphrodite;
        