// Override default scroll behaviour, forcing the scroll position to the top for every route
// https://nuxtjs.org/api/configuration-router#scrollbehavior
export default function(to, from, savedPosition) {
  return { x: 0, y: 0 };
}
