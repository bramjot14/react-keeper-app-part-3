### React State Management & Component Communication

Completed:
- Built a Keeper (Notes) App using React
- Managed a list of notes using `useState`
- Added new notes dynamically through controlled inputs
- Passed data between components using props
- Implemented delete functionality using note IDs
- Used `map()` to render multiple components
- Practiced immutable state updates
- Learned when to use the spread operator while updating array state
- Understood that array methods like filter() return a new array, so extra spreading is unnecessary

Rule of Thumb:

Array methods that return a new array → no spread needed such as-
filter(), map(), slice()

When manually building a new array → use spread such as-
add, insert

Key Takeaway:
Managing arrays in React state requires immutable updates. Lifting state up and passing handler functions through props allows components to communicate effectively and keep the UI in sync.
