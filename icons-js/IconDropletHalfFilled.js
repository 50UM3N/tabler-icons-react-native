import Svg, { Path } from 'react-native-svg';
         
function IconDropletHalfFilled({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-droplet-half-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 2l.07 .003a2.41 2.41 0 0 1 1.825 .907l.108 .148l4.92 7.306c1.952 3.267 1.191 7.42 -1.796 9.836c-2.968 2.402 -7.285 2.402 -10.254 0c-2.917 -2.36 -3.711 -6.376 -1.901 -9.65l.134 -.232l4.893 -7.26c.185 -.275 .426 -.509 .709 -.686a2.426 2.426 0 0 1 1.066 -.36l.226 -.012zm-1 3.149l-4.206 6.24c-1.44 2.41 -.88 5.463 1.337 7.257a6.101 6.101 0 0 0 2.869 1.276v-14.773z" stroke-width="0" fill={color} /></Svg>;

}
export default IconDropletHalfFilled;
        