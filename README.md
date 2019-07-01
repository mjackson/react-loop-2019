Title: Composing Behavior in React or Why React Hooks are Awesome
Abstract: Explore how React hooks use regular JavaScript function composition to model complex state and behavior.
Where: React Loop 2019, Chicago, IL
When: June 21, 2019

### Video

<div style="text-align:center">
  <a title="Composing Behavior in React or Why React Hooks are Awesome" href="https://www.youtube.com/watch?v=nUzLlHFVXx0">
    <img alt="Composing Behavior in React or Why React Hooks are Awesome" src="http://img.youtube.com/vi/nUzLlHFVXx0/0.jpg" />
  </a>
</div>

### Repo

The repo I used in the talk is here: https://github.com/ReactTraining/hooks-workshop

### Examples

All of the examples I built in this talk are here: https://github.com/mjackson/react-loop-2019/blob/master/hooks.js

### Outline

- Who am I?
- What does "composition" mean?
  - Discrete behaviors
  - May be combined
  - Shared interface is the key
  - Example: CLI tools
- What is "function composition"?
  - Shared interface is arguments + return value
  - Example: `add` function
- React Hooks are functions with superpowers
  - They can manage state
  - They can participate in the lifecycle
  - They can receive implicit arguments (via context)
  - But the best feature of all? Composition!
    - They are **just functions**, after all
- Custom Hooks
  - useLogging in \<Minutes> (single behavior)
  - usePersistentState in \<NewPost> (single state + behavior)
  - useUndo in \<NewPost> (ref + state + behavior + method override)
- Hooks as useReducer Middleware
  - useLogger in \<Feed>
  - useThunk in \<Feed>
