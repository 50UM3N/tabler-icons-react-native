import Svg, { Path } from 'react-native-svg';
         
function IconBoxAlignTop({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-align-top" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z" /><Path d="M4 15.005v-.01" /><Path d="M4 20.005v-.01" /><Path d="M9 20.005v-.01" /><Path d="M15 20.005v-.01" /><Path d="M20 20.005v-.01" /><Path d="M20 15.005v-.01" /></Svg>;

}
export default IconBoxAlignTop;
        