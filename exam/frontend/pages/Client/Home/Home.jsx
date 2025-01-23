import { Helmet } from "react-helmet-async"
import HomeBanner from "./HomeBanner/HomeBanner"
import HomeBlog from "./HomeBlog/HomeBlog"
import HomeCollection from "./HomeCollection/HomeCollection"
import HomeProducts from "./HomeProducts/HomeProducts"

const Home = () => {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <HomeBanner/>
    <HomeCollection/>
    <HomeProducts/>
    <HomeBlog/>
    </>
  )
}

export default Home