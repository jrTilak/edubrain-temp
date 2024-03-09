export const reOrderArray = (array: any[], index: number) => {
  const newArray = [...array.slice(index), ...array.slice(0, index)];
  console.log(newArray);
  return newArray;
};
