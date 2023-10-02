import Svg, { Path } from 'react-native-svg';
         
function IconNumber14Small({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-number-14-small" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 10l2 -2v8" /><Path d="M13 8v3a1 1 0 0 0 1 1h3" /><Path d="M17 8v8" /></Svg>;

}
export default IconNumber14Small;
        