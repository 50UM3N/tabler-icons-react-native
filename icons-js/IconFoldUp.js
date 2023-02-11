import Svg, { Path } from 'react-native-svg';
                    
function IconFoldUp({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-fold-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 13v-8l-3 3m6 0l-3 -3" /><Path d="M9 17l1 0" /><Path d="M14 17l1 0" /><Path d="M19 17l1 0" /><Path d="M4 17l1 0" /></Svg>;

}
export default IconFoldUp;
                    