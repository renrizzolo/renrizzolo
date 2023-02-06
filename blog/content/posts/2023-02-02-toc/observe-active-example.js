const example = `import React from "react";
import { Box, Text, Grid } from "theme-ui";

const useObserveActiveSection = ({ headings }) => {
  const previousY = React.useRef();
  const [highlighted, setHighlighted] = React.useState();

  React.useEffect(() => {
    if (highlighted) {
      const navElement = document.querySelector(
        'a[href="#' + highlighted + '"]'
      );
      console.log(highlighted, navElement);
      headings.forEach(
        ({ url }) =>
          url !== "#" + highlighted &&
          document
            .querySelector('a[href="' + url + '"]')
            ?.classList.contains("active") &&
          document
            .querySelector('a[href="' + url + '"]')
            ?.classList.remove("active")
      );
      navElement &&
        !navElement.classList.contains("active") &&
        navElement.classList.add("active");
    }
  }, [highlighted, headings]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        const currentY = window.scrollY;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHighlighted(entry.target.id);
          } else {
            const currentY = window.scrollY;
            const thisIndex = headings.findIndex(
              ({ url }) => url === "#" + entry.target.id
            );
            if (currentY < previousY.current) {
              if (thisIndex > 0 && thisIndex < headings.length) {
                console.log("hjighlight back", currentY, previousY.current);

                const url = headings[thisIndex - 1]?.url;
                setHighlighted(url.substring(1));
              }
            }
          }
          previousY.current = currentY;
        });
      },
      {
        threshold: 0,
        root: document,
        rootMargin: "0% 0% -85% 0%"
      }
    );
    headings.forEach((heading) => {
      const id = heading.url.substring(1);
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, [headings]);
};

const H2 = ({ n }) => (
  <Text
    as="h2"
    className="article-h2"
    sx={{ scrollMarginTop: "1rem" }}
    id={\`heading-\${n}\`}
  >
    Heading {n}
  </Text>
);

const TableOfContents = () => {
  const [headings, setHeadings] = React.useState([]);

  React.useEffect(() => {
    const headings = Array.from(document.querySelectorAll(".article-h2"));
    const headingItems = headings.map((el) => ({
      url: "#" + el.id,
      title: el.innerText
    }));
    setHeadings(headingItems);
  }, []);

  useObserveActiveSection({ headings });

  return (
    <Box
      sx={{
        fontFamily: "body",
        position: "sticky",
        top: 0,
        padding: 3,
        alignSelf: "flex-start",
        border: "1px solid",
        borderColor: "gray.4"
      }}
    >
      <Text as="h4" sx={{ fontSize: 2 }}>
        Table of cotents
      </Text>
      <Box as="ul" sx={{ listStyleType: "none", padding: 0 }}>
        {headings.map(({ title, url }) => (
          <li key={url}>
            <Text
              sx={{
                color: "primary.3",
                "&.active": {
                  color: "primary.2"
                },
                display: "block",
                padding: 1,
                textDecoration: "none"
              }}
              as="a"
              href={url}
            >
              {title}
            </Text>
          </li>
        ))}
      </Box>
    </Box>
  );
};

const Page = () => (
  <Grid gap={4} columns={"1fr 200px"} p={3}>
    <Box sx={{ fontFamily: "body", "p + h2": { marginTop: "3rem" } }}>
      {Array.from(Array(5)).map((_, n) => (
        <div key={n}>
          <H2 n={n + 1} />
          <p>
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
            quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs
            grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright
            vixens jump; dozy fowl quack.
          </p>

          <p>
            Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft
            Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping
            zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get
            my woven flax jodhpurs! "Now fax quiz Jack! " my brave ghost pled.
          </p>
        </div>
      ))}
    </Box>
    <TableOfContents />
  </Grid>
);

export default Page;

`;

export default example;
