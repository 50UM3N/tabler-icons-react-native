import Svg, { Path } from 'react-native-svg';
         
function IconBoxPadding({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-padding" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><Path d="M8 16v.01" /><Path d="M8 12v.01" /><Path d="M8 8v.01" /><Path d="M16 16v.01" /><Path d="M16 12v.01" /><Path d="M16 8v.01" /><Path d="M12 8v.01" /><Path d="M12 16v.01" /></Svg>;

}
export default IconBoxPadding;
        