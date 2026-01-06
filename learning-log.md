### React State Management & Component Communication

Completed:
- Built a Keeper (Notes) App using React
- Managed a list of notes using useState as an array of objects
- Added new notes dynamically by appending objects ({ title, content }) to array state
- Understood that prevState (prevItems) always represents the previous array, not the object being added
- Learned that React does not infer types inside arrays — the developer defines the data shape
- Understood that array methods like map(), filter(), and slice() work on arrays, not on objects
- Learned that objects must be accessed via properties, while array methods operate on the array itself
- Passed data and handler functions between components using props
- Implemented delete functionality using note IDs and filter()
- Used map() to render multiple note components
- Practiced immutable state updates using the spread operator
- Learned when the spread operator is required vs unnecessary

Rule of Thumb:
Array methods that return a new array → no spread needed
- filter(), map(), slice()

When manually building a new array → use spread
- add, insert, append ([...prevItems, newItem])

Key Takeaway:
Mapping, filtering, or slicing happens on arrays, not on individual objects inside them. React state simply stores data; understanding the difference between array operations and object access is essential for predictable state updates and clean component rendering.
