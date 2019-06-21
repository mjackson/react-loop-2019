Title: Composing Behavior in React or Why React Hooks are Awesome

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

Working repo: https://github.com/ReactTraining/hooks-workshop
