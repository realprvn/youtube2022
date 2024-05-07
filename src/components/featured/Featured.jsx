import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=baku,guba,nakhchivan"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://www.azernews.az/media/2019/01/07/bakucityy4.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Baku</h1>
              <h2>{data[0]} hotels</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://guidedazerbaijan.com/wp-content/uploads/2019/06/things-to-do-in-quba.jpg"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Quba</h1>
              <h2>{data[1]} hotels</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://i0.wp.com/nomads-yurt.com/wp-content/uploads/2019/04/Nakhchivan-Azerbaijan-nomads-yurt.jpg?fit=1000%2C600&ssl=1"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Nakhchivan</h1>
              <h2>{data[2]} hotels</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;