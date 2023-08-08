# React Demo Unmounting/Remounting Components

This project is designed for analyzing a bug for multiple API calls while resizing the window to a certain breakpoint.

## How to run it
1. `npm install`
2. `npm start`

## Instructions
There are three kinds of components:
- Native components (using `import`)
- Inner-declared components (defined inside of a parent component)
- Higher order components (using HOC to render the component beforehand)

We mocked the display change using a button that toggles `isMobile`.

## Expected results
- Native: will not call useEffect() (without dependency) inside of components.
- Inner: **will call** useEffect() everytime breakpoint is reached.
- HOC: **same as Inner**, i.e., **will call** useEffect() everytime breakpoint is reached.

## Possible solutions
- Check HOC usage to avoid using them everywhere (e.g., `...Wrapper`), but not possible due to structural logic design.
- Check Inner components and move those affected to individual folders (but may not solve the problem completely due to ^^)
- Refactor, not possible at all for the time being.

## Conclusion
Just chill. Learn it would be beneficial.
