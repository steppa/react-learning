import React, {Fragment} from 'react';

class PythonContent extends React.Component {
  render() {
    return (
      <Fragment>

        <div className="row">
          <article id="CodingContent" className="col-sm-12">
            <header>Example code for exercise</header>
            <pre>
              <a className="block1 blockLink shadow-sm bg-white rounded border-bottom-0" data-toggle="collapse" href="#blockOneText" role="button"
                 aria-expanded="false" aria-controls="blockOneText">
              <span className="lineOfCode">import turtle</span>
              </a>
              <div id="blockOneText" className="collapse border-info ">
                <p><a className="inner-link" href="http://www.codeitmakeit.co.uk/dictionary/#import">Import</a> has to be at the top of your code or it won't work properly.  </p>
                <p>turtle is a drawing library. You write simple instructions to create line drawings.</p>
              </div>

                <a className="block2 blockLink shadow-sm bg-white rounded" data-toggle="collapse" href="#blockTwoText" roles="button" aria-expanded="false"
                   aria-controls="blockTwoText">
                  <span className="lineOfCode"><var>t</var> = turtle</span>
                  <span className="lineOfCode">t.speed('fastest')</span>
                  <span className="lineOfCode">t.color("red")</span>
                </a>

              <div id="blockTwoText" className="collapse">
                <p>Long description here about lines 2 to 5.</p>
              </div>
              <span className="lineOfCode">    </span>
              <span className="lineOfCode">def drawShape():</span>
              <span className="lineOfCode">  sidesDrawn = 0</span>
              <span className="lineOfCode">  while sidesDrawn &lt; numSides:</span>
              <span className="lineOfCode">  t.forward(20)</span>
              <span  className="lineOfCode">  t.left(360/numSides)</span>
              <span  className="lineOfCode">  sidesDrawn = sidesDrawn + 1</span>
              <span  className="lineOfCode"></span>
              <span  className="lineOfCode">def drawTile():</span>
              <span  className="lineOfCode">  shapesDrawn = 0</span>
              <span  className="lineOfCode">  while shapesDrawn &lt; numSides:</span>
              <span  className="lineOfCode">  drawShape()</span>
              <span  className="lineOfCode">  t.right(360/numSides)</span>
              <span  className="lineOfCode">  shapesDrawn = shapesDrawn + 1</span>
              <span  className="lineOfCode"></span>
              <span  className="lineOfCode">def tileRow():</span>
              <span  className="lineOfCode">  x = 0</span>
              <span  className="lineOfCode">  while x &lt; 5:</span>
              <span  className="lineOfCode">    drawTile()</span>
              <span  className="lineOfCode">    t.penup()</span>
              <span  className="lineOfCode">    t.forward(40)</span>
              <span  className="lineOfCode">    t.pendown()</span>
              <span  className="lineOfCode">    x = x +1</span>
              <span  className="lineOfCode"></span>
              <span  className="lineOfCode">numSides = input("Number of sides for shape (must be more than 2:")</span>
              <span  className="lineOfCode">numSides = int(numSides)</span>
              <span  className="lineOfCode"></span>
              <span className="lineOfCode">tileRow()</span>
           </pre>
          </article>
        </div>

        <aside id="copyText">
          <textarea readOnly>

            import turtle;

          </textarea>
        </aside>
      </Fragment>
  )
  }
  }

  export default PythonContent;