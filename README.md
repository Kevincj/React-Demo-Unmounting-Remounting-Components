# Resizing Bug Demo

This project is designed for [Analysis 3567065](https://tfs.rockfin.com/QL/IT/_workitems/edit/3567065): **Rewards Dashboard - Identify value gained by reducing duplicate endpoint calls from page resizing.**

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
