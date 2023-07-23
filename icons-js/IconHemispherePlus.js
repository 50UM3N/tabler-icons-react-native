import Svg, { Path } from 'react-native-svg';
         
function IconHemispherePlus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hemisphere-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 9m-9 0a9 3 0 1 0 18 0a9 3 0 1 0 -18 0" /><Path d="M3 9a9 9 0 0 0 9 9m8.396 -5.752a8.978 8.978 0 0 0 .604 -3.248" /><Path d="M16 19h6" /><Path d="M19 16v6" /></Svg>;

}
export default IconHemispherePlus;
        