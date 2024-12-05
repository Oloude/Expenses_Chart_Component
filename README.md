# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![](./public/preview.png)

### Links

- Solution URL: [github](https://github.com)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://www.typescriptlang.org/) - extends JavaScript by adding types to the language.

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
type BarProps = {
  amount: number,
  day: string,
};

function Bar({ amount, day }: BarProps) {
  const [visible, setVisible] = useState(false);

  function isVisible() {
    setVisible(true);
  }

  function isNotVisible() {
    setVisible(false);
  }
  return (
    <div className=" self-end justify-self-center  relative">
      {visible && (
        <div className="text-cream bg-darkBrown rounded p-1 text-center font-medium  absolute -top-10 -left-2">
          ${amount}
        </div>
      )}
      <div
        onMouseEnter={isVisible}
        onMouseLeave={isNotVisible}
        className={`bg-softRed   rounded w-10 it hover:bg-opacity-60  ${
          day === "mon"
            ? "h-8"
            : day === "tue"
            ? "h-24"
            : day === "wed"
            ? "h-32 bg-cyan"
            : day === "thu"
            ? "h-20"
            : day === "fri"
            ? "h-12"
            : day === "sat"
            ? "h-28"
            : day === "sun"
            ? "h-16"
            : ""
        } `}
      ></div>
    </div>
  );
}

export default Bar;
```

## Author

- Frontend Mentor - [@Oloude](https://www.frontendmentor.io/profile/Oloude)
- Twitter - [@AbosedeOloude](https://www.twitter.com/AbosedeOloude)
