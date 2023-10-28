import Svg, { Path } from 'react-native-svg';
         
function IconCaretUpDown({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-up-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M18 10l-6 -6l-6 6h12" /><Path d="M18 14l-6 6l-6 -6h12" /></Svg>;

}
export default IconCaretUpDown;
        