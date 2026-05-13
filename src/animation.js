const getAnimatedScrollY = (anim, scrollY) => {
  if (anim === 0) return 0;
  return (scrollY - 1) * anim + 1;
};
export default getAnimatedScrollY;