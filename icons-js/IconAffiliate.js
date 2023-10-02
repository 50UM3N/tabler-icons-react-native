import Svg, { Path } from 'react-native-svg';
         
function IconAffiliate({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-affiliate" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" /><Path d="M11.683 12.317l5.759 -5.759" /><Path d="M5.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" /><Path d="M18.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" /><Path d="M18.5 18.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" /><Path d="M8.5 15.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" /></Svg>;

}
export default IconAffiliate;
        