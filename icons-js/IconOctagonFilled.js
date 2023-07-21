import Svg, { Path } from 'react-native-svg';
                    
function IconOctagonFilled({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-octagon-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth="0" stroke="none" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15.3 2h-6.6c-.562 0 -1.016 .201 -1.407 .593l-4.7 4.7a1.894 1.894 0 0 0 -.593 1.407v6.6c0 .562 .201 1.016 .593 1.407l4.7 4.7c.391 .392 .845 .593 1.407 .593h6.6c.562 0 1.016 -.201 1.407 -.593l4.7 -4.7c.392 -.391 .593 -.845 .593 -1.407v-6.6c0 -.562 -.201 -1.016 -.593 -1.407l-4.7 -4.7a1.894 1.894 0 0 0 -1.407 -.593z" stroke-width="0" fill={color} /></Svg>;

}
export default IconOctagonFilled;
                    