export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const replace = (count) => ({
  type: 'REPLACE',
  count
});

export const changeCount = () => ({
  type: 'CHANGE_COUNT'
});