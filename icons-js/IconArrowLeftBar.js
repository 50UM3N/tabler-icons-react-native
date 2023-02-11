import Svg, { Path } from 'react-native-svg';
                    
function IconArrowLeftBar({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left-bar" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21 12h-18" /><Path d="M6 9l-3 3l3 3" /><Path d="M21 9v6" /></Svg>;

}
export default IconArrowLeftBar;
                    