import Svg, { Path } from 'react-native-svg';
         
function IconBow({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bow" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 3h4v4" /><Path d="M21 3l-15 15" /><Path d="M3 18h3v3" /><Path d="M16.5 20c1.576 -1.576 2.5 -4.095 2.5 -6.5c0 -4.81 -3.69 -8.5 -8.5 -8.5c-2.415 0 -4.922 .913 -6.5 2.5l12.5 12.5z" /></Svg>;

}
export default IconBow;
        