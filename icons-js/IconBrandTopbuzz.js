import Svg, { Path } from 'react-native-svg';
                    
function IconBrandTopbuzz({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-topbuzz" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4.417 8.655a0.524 .524 0 0 1 -.405 -.622l.986 -4.617a0.524 .524 0 0 1 .626 -.404l14.958 3.162c.285 .06 .467 .339 .406 .622l-.987 4.618a0.524 .524 0 0 1 -.625 .404l-4.345 -.92c-.198 -.04 -.315 .024 -.353 .197l-2.028 9.49a0.527 .527 0 0 1 -.625 .404l-4.642 -.982a0.527 .527 0 0 1 -.406 -.622l2.028 -9.493c.037 -.17 -.031 -.274 -.204 -.31l-4.384 -.927z" /></Svg>;

}
export default IconBrandTopbuzz;
                    