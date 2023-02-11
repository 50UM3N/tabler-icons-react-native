import Svg, { Path } from 'react-native-svg';
                    
function IconCat({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cat" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20 3v10a8 8 0 1 1 -16 0v-10l3.432 3.432a7.963 7.963 0 0 1 4.568 -1.432c1.769 0 3.403 .574 4.728 1.546l3.272 -3.546z" /><Path d="M2 16h5l-4 4" /><Path d="M22 16h-5l4 4" /><Path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M9 11v.01" /><Path d="M15 11v.01" /></Svg>;

}
export default IconCat;
                    