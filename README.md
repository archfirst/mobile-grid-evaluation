mobile-grid-evaluation
======================

The purpose of this project is to evaluate various off-the-shelf grids to determine how well they work
on mobile devices. To achieve this goal, we have defined a simple set of requirements for a fictitious
page showing stock positions in a portfolio. See below:

![Mobile Grid Requirements](https://raw.github.com/archfirst/mobile-grid-evaluation/master/docs/mobile-grid-requirements.png)

Here's a more "official" set of these requirements:

1. The page should have five sections
    * Header: Formatted as "\<Framework\> | \<Grid or Approach\>"
    * Selected position: Position that was last clicked/tapped
    * Table header: Fixed, should not scroll
    * Table body: Positions from the supplied data file (data/positions.js), allows scrolling.
    * Layout info: Shows which responsive layout has been selected and window size in pixels
2. Look and feel should be as shown above.
3. Gain and Gain % numbers to be formatted as in examples below:
    * Zero or positive: $35,000.00 - in gold color
    * Negative: ($35,000.00) - in red color
4. The table should adapt to the height of the device/browser window, taking up all the available
space between the fixed sections above and below it.
5. The table should adapt to the width of the device/browser window, showing the most important
columns that can fit in the available width. For the purpose of this exercise, assume three layouts:
    * Wide (900+): Show all nine columns
    * Medium (500-899): Drop "Total Cost" and "Gain" (show 7 columns)
    * Narrow (0-499): Drop "Symbol", "Price Paid" and "Gain %" (show 4 columns)
6. In case of a mobile device, the table should respond to orientation changes and conform to the
requirements described above.

Grids in Scope
--------------
1. Standard HTML table in a scroller
2. Standard HTML table in an [iScroll](http://cubiq.org/iscroll-4)
3. [jqGrid](http://www.trirand.com)
4. [SlickGrid](https://github.com/mleibman/SlickGrid/wiki)
5. [DataTables](http://www.datatables.net)
6. [jqPivot](https://github.com/roblarsen/jqPivot)
7. [Archfirst Grid](https://archfirst.googlecode.com/svn/trunk/html/libs/archfirst/jquery-afgrid)

If you would like to include other grids as part of this evaluation, please implement the requirements
and send us a pull request.

Development
-----------
The folder structure for this project consits of several sub-folders, each focused on a particular
grid or approach. Developers whishing to contribute to this project should fork this repository and
submit pull requests with implementations.

Results
-------
<table>
    <thead>
        <tr>
            <th>Framework</th>
            <th>Grid</th>
            <th>R1</th>
            <th>R2</th>
            <th>R3</th>
            <th>R4</th>
            <th>R5</th>
            <th>R6</th>
            <th>Status</th>
            <th>Comments</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>None</td>
            <td>HTML table (no scrolling)</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Done</td>
            <td>Provides simple markup to conform to the desired look. No attempt to make a scrolling table</td>
        </tr>
    </tbody>
</table>