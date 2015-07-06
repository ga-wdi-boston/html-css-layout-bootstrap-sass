![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# CSS: Layout with Bootstrap

## Objectives

By the end of this lesson, students should be able to:

- Integrate bootstrap with an existing project.
- Use bootstrap to create responsive site layouts.
- Reference bootstrap documentation for existing style class names.

## Instructions

1. Fork and clone this repo.
1. Change into the project directory.
1. Follow your instructor's instructions.

To add bootstrap to an existing project:

1. `npm install --save bootstrap` to download bootstrap and add it as a dependency.
1. Link to bootstrap CSS in `index.html`. Browse `node_modules` for the full path to the stylesheets you want.
1. Require the bootstrap JS as part of your `browserify` build.
1. Edit your layout (`index.html`) to include appropriate layout elements, including containers, rows, columns, etc.

## Exercise: Holy Grail Layout

The goal of our exercise is to recreate the "Holy Grail" layout. This traditional layout is challenging in CSS. It is defined by a set of constraints that may be difficult to achieve all at once:

1. A header, a footer, and a main content area.
1. The main content area is divided into left, right, and center columns.
1. The left and right columns are "sidebars".
1. The middle column is for content.
1. Any column should be the "longest" and display without scrollbars, pushing the footer down if necessary.
1. The center should be "fluid" and resize with the browser window.
1. Columns should remain a fixed width. If the viewport isn't wide enough, the columns should stack below content.
1. The middle column should appear first in the source, since early content is ranked higher in importance by search engines.

We'll start by including bootstrap and creating our three columns. Then we'll proceed by adding a navbar and a footer. Lastly, we'll experiment to see how many of the constraints we can meet using built-in bootstrap styling classes.

## Bonus

For an extra challenge, make the header and footer sticky, even when the content doesn't fill the page.

Next, try using JavaScript to have the header and footer hide on `scrolldown` and display on `scrollup`.

## References

- [In Search of the Holy Grail · An A List Apart Article](http://alistapart.com/article/holygrail)
- [Solving the Holy Grail Layout | appendTo](http://appendto.com/2014/03/solving-the-holy-grail-layout-2/)
- [Bootstrap: Template](http://getbootstrap.com/getting-started/#template)
- [Bootstrap: Examples](http://getbootstrap.com/getting-started/#examples)
- [Bootstrap: Grid](http://getbootstrap.com/css/#grid)
- [Bootstrap: CSS](http://getbootstrap.com/css/)
- [Bootstrap: Components](http://getbootstrap.com/components/)
- [Bootstrap: JavaScript](http://getbootstrap.com/javascript/)
