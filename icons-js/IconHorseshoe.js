import Svg, { Path } from 'react-native-svg';
         
function IconHorseshoe({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-horseshoe" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M19 17c.5 -1.242 2 -2 2 -5s-1 -9 -9 -9s-9 6 -9 9s1.495 3.749 2 5l-2 1l2 3l2.406 -1.147c1.25 -.714 1.778 -2.08 1.203 -3.363c-1.078 -2.407 -1.609 -8.49 3.391 -8.49s4.469 6.083 3.39 8.49c-.574 1.284 -.045 2.649 1.204 3.363l2.406 1.147l2 -3l-2 -1z" /></Svg>;

}
export default IconHorseshoe;
        