/*
  Available at https://dom.fyi/list.
  Acts as a directory of all notes.
*/

import React from "react"
import { Helmet } from "react-helmet"
import { Link, navigate } from "gatsby"
const github = "https://github.com/domfyi/dom.fyi"

const breakLength = 10 // If no post for this many days, consider it a new content group

const Rocket = () => <div className="list_divider">🚀</div>

export default ({ pageContext: { notes, year } }) => {
  const published = notes.filter(
    note => note.content.excerpt.indexOf("🚀") === 0
  )
  return (
    <main>
      <Helmet>
        <title>dom.vin</title>
        <meta charSet="utf-8" />
        <link rel="canonical" href={`https://dom.vin/list`} />
      </Helmet>
      <header style={{ display: "block" }}>
        <h1>
          <span aria-label="rocket" style={{ marginRight: "1rem" }} role="img">
            <Link to={`/blog`} children={`‹ all`} />
            <img
              src="/dom.png"
              style={{
                width: 42,
                marginRight: 6,
                marginLeft: 6,
                marginBottom: -10,
              }}
            />
            {year}
          </span>
        </h1>
      </header>

      {year === "2019" && (
        <h1 style={{ opacity: 0.33, marginBottom: "3rem" }}>
          On Design and Dev and starting a blog and catching a train without a
          ticket as the sun sets against the horizon.
        </h1>
      )}

      {year === "2021" && (
        <h1 style={{ opacity: 0.33, marginBottom: "3rem" }}>
          On owning and sharing. Startups, innovation and the creative creator
          process.
        </h1>
      )}

      <nav>
        {published.map(({ date, content, gapAfter }, i) => (
          <React.Fragment key={date}>
            <div
              style={{
                marginBottom: gapAfter > breakLength ? "2rem" : "auto",
              }}
            >
              <Link to={`/blog/${date}`}>
                <label>
                  <span style={{ fontSize: "0.85em" }}>{i + 1}</span>
                </label>
                <span style={{ marginLeft: 4 }}>
                  {content.excerpt.replace("🚀", "").split(mark)[0]}
                </span>
              </Link>
            </div>
            {gapAfter > breakLength && i + 1 < published.length && <Rocket />}
          </React.Fragment>
        ))}
      </nav>
    </main>
  )
}

// Truncate each note at the first punctuation mark as a description.
const mark = /[.:;?!~,`"&|()<>{}[\]\r\n/\\]+/
