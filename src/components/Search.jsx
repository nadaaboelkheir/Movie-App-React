
import image from "../assets/movie.png";

const search = () => {
    return(
        <div
        style={{
          backgroundImage: `url(${image})`,
          opacity: "0.6",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="search"
          style={{
            width: "450px",
            height: "50px",
            borderRadius: "10px",
            paddingLeft: "10px",
            marginRight: "30px",
          }}
        />
        <button
          style={{
            backgroundColor: "#b71c1c",
            width: "120px",
            height: "50px",
            color: "white",
            borderRadius: "10px",
          }}
        >
          {" "}
          search
        </button>
      </div>
    )
}

export default search