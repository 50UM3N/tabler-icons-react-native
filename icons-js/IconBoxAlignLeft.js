import Svg, { Path } from 'react-native-svg';
                    
function IconBoxAlignLeft({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-align-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9.752 19.753v-16h-5a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1h5z" /><Path d="M14.752 19.753h-.01" /><Path d="M19.753 19.753h-.011" /><Path d="M19.753 14.752h-.011" /><Path d="M19.753 8.752h-.011" /><Path d="M19.753 3.752h-.011" /><Path d="M14.752 3.752h-.01" /></Svg>;

}
export default IconBoxAlignLeft;
                    