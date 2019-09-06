# Table-of-Music
A simple site that allows the user to add music that they like and populate a table with these inputs. The table as a cookie in sessionStorage so it loads whenever the browser is re-opened after closing. Table can be cleared too, this was mostly for test purposes but now it's a feature.

Class Assignment to learn working with cookies and stuff that I've forgotten (the DOM, of course!). Styled the site using MaterializeCSS, also tried to use jQuery to populate the table from cookies more dynamically but that didn't work out, so just used vanilla JS instead.

Used the DOM to check the rating selection; if higher than 8, the user will be asked to check whether the song is a favorite, this'll be reflected in the table with a star.
