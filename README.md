mobile-grid-evaluation
======================

The purpose of this project is to evaluate various off-the-shelf grids to determine how well they work
on mobile devices. To achieve this goal, we have defined a simple set of requirements allowing us to
display positions in a stock portfolio, as shown below:

![Mobile Grid Requirements](https://raw.github.com/archfirst/mobile-grid-evaluation/master/docs/wide-layout.png)

When the device width is less that 900 pixels, the "Total Cost" and "Gain" columns are dropped.
Also the height of the table rows is increased to 44 pixels to allow for a bigger tap target.
In addition, the table font-size is increase to 16px for better readability.

![Mobile Grid Requirements](https://raw.github.com/archfirst/mobile-grid-evaluation/master/docs/medium-layout.png)

When the device width is less that 500 pixels, the "Security", "Price Paid" and "Gain %" columns are dropped:

![Mobile Grid Requirements](https://raw.github.com/archfirst/mobile-grid-evaluation/master/docs/narrow-layout.png)

Here's a more "official" set of these requirements:

1. The page should have five sections:
    * Header: Formatted as "\<Framework\> | \<Grid\>"
    * Selected position: Shows the position that was last clicked/tapped
    * Table header: Shows column headings
    * Table body: Shows positions from a supplied data file (data/positions.js)
    * Layout info: Shows which responsive layout has been selected and the window size in pixels
2. Look and feel should be as shown above.
3. Gain and Gain % numbers to be formatted as in the examples below:
    * Zero or positive: $35,000.00 - in gold color
    * Negative: ($35,000.00) - in red color
4. The table should adapt to the height of the device/browser window, taking up all the available
space between the fixed sections above and below it.
5. The table should adapt to the width of the device/browser window, showing the most important
columns that can fit in the available width. For the purpose of this exercise, assume three layouts:
    * Wide (900+): Shows all nine columns, row height = 32px, font size = 14px
    * Medium (500-899): Drops "Total Cost" and "Gain" (showing 7 columns), row height = 44px, font size = 16px 
    * Narrow (0-499): Drops "Symbol", "Price Paid" and "Gain %" (showing only 4 columns), row height = 44px, font size = 16px
6. In case of a mobile device, the table should respond to orientation changes, conforming to the
requirements described above.
7. The table header should be fixed, while the body should be scrollable.

Grids in Scope
--------------
1. Standard HTML table - use css overflow for scrolling
2. Standard HTML table - use [iScroll](http://cubiq.org/iscroll-4) for scrolling
3. [jqGrid](http://www.trirand.com)
4. [SlickGrid](https://github.com/mleibman/SlickGrid/wiki)
5. [DataTables](http://www.datatables.net)
6. [jqPivot](https://github.com/roblarsen/jqPivot)
7. [Archfirst Grid](https://archfirst.googlecode.com/svn/trunk/html/libs/archfirst/jquery-afgrid)

If you'd like to include other grids as part of this evaluation, please implement the requirements
and send us a pull request.

Development
-----------
The folder structure for this project consits of several sub-folders, each focused on a particular
grid. Developers wishing to contribute to this project should fork this repository and submit pull
requests with their implementations.

Results (Reqirements 1-6)
-------------------------
<table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Fmwk</th>
            <th>Grid</th>
            <th>R1</th>
            <th>R2</th>
            <th>R3</th>
            <th>R4</th>
            <th>R5</th>
            <th>R6</th>
            <th>Owner</th>
            <th>Status</th>
            <th>Demo</th>
            <th>Comments</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>None</td>
            <td>HTML table (no scrolling)</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>N</td>
            <td>Y</td>
            <td>Y</td>
            <td>archfirst</td>
            <td>Done</td>
            <td><a href="http://archfirst.org/examples/mobile-grid-evaluation/no-framework-html-table-no-scrolling" target="_blank">Run</a></td>
            <td>Starter example providing desired look and feel. No attempt to make the table scrollable.</td>
        </tr>
        <tr>
            <td>2</td>
            <td>None</td>
            <td>HTML table</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>???</td>
            <td>On hold</td>
            <td><a href="http://archfirst.org/examples/mobile-grid-evaluation/no-framework-html-table" target="_blank">Run</a></td>
            <td>Needs work to freeze table header</td>
        </tr>
        <tr>
            <td>3</td>
            <td>None</td>
            <td>HTML table - iScroll</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>???</td>
            <td>On hold</td>
            <td><a href="http://archfirst.org/examples/mobile-grid-evaluation/no-framework-html-table-iscroll" target="_blank">Run</a></td>
            <td>Needs work to freeze table header</td>
        </tr>
        <tr>
            <td>4</td>
            <td>jQuery Mobile</td>
            <td>HTML table</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>???</td>
            <td>On hold</td>
            <td><a href="http://archfirst.org/examples/mobile-grid-evaluation/jquery-mobile-html-table" target="_blank">Run</a></td>
            <td>Needs work to freeze table header</td>
        </tr>
        <tr>
            <td>5</td>
            <td>jQuery Mobile</td>
            <td>HTML table - iScroll</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>Y</td>
            <td>???</td>
            <td>On hold</td>
            <td><a href="http://archfirst.org/examples/mobile-grid-evaluation/jquery-mobile-html-table-iscroll" target="_blank">Run</a></td>
            <td>Needs work to freeze table header</td>
        </tr>
        <tr>
            <td>6</td>
            <td>jQuery Mobile</td>
            <td>jqGrid</td>
            <td>Y</td>
            <td>N</td>
            <td>N</td>
            <td>Y</td>
            <td>N</td>
            <td>Y</td>
            <td>Chetan Rane</td>
            <td>In Progress</td>
            <td><a href="http://archfirst.org/examples/mobile-grid-evaluation/juqery-mobile-jqgrid" target="_blank">Run</a></td>
            <td>Needs work on look & feel as well as scrolling on mobile devices.</td>
        </tr>
        <tr>
            <td>7</td>
            <td>jQuery Mobile</td>
            <td>SlickGrid</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Sravan Rekandar</td>
            <td>In Progress</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>8</td>
            <td>jQuery Mobile</td>
            <td>DataTables</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>???</td>
            <td>Not Started</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>9</td>
            <td>jQuery Mobile</td>
            <td>jQPivot</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Rob Larsen</td>
            <td>Not Started</td>
            <td></td>
            <td></td>
        <tr>
            <td>10</td>
            <td>jQuery Mobile</td>
            <td>Archfirst Grid</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Manish Shanker</td>
            <td>Not Started</td>
            <td></td>
            <td></td>
        </tr>
        </tr>
    </tbody>
</table>


Results (Reqirements 7 - Scrolling Table Body)
----------------------------------------------
<table>
    <thead>
        <tr>
            <th rowspan="2">Id</th>
            <th rowspan="2">Fmwk</th>
            <th rowspan="2">Grid</th>
            <th colspan="3">Win7</th>
            <th>iOS4</th>
            <th colspan="2">iOS6</th>
            <th colspan="3">Android</th>
        </tr>
        <tr>
            <th>Chrome</th>
            <th>Firefox</th>
            <th>IE9</th>
            <th>iPhone4</th>
            <th>iPhone5</th>
            <th>iPad</th>
            <th>Native</th>
            <th>Firefox</th>
            <th>Opera</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>None</td>
            <td>HTML table (no scrolling)</td>
            <td>N</td>
            <td>N</td>
            <td>N</td>
            <td>N</td>
            <td>N</td>
            <td>N</td>
            <td>N</td>
            <td>N</td>
            <td>N</td>
        </tr>
        <tr>
            <td>2</td>
            <td>None</td>
            <td>HTML table</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>3</td>
            <td>None</td>
            <td>HTML table - iScroll</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>4</td>
            <td>jQuery Mobile</td>
            <td>HTML table</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>5</td>
            <td>jQuery Mobile</td>
            <td>HTML table - iScroll</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>6</td>
            <td>jQuery Mobile</td>
            <td>jqGrid</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>7</td>
            <td>jQuery Mobile</td>
            <td>SlickGrid</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>8</td>
            <td>jQuery Mobile</td>
            <td>DataTables</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>9</td>
            <td>jQuery Mobile</td>
            <td>jqPivot</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>10</td>
            <td>jQuery Mobile</td>
            <td>Archfirst Grid</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>