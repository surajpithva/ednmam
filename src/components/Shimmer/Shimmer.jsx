import "./Shimmer.css";
const Shimmer = () => {
  return (
    <section className="wrapper">
      <div className="loader">
        <div className="loading one" />
        <div className="loading two" />
        <div className="loading three" />
        <div className="loading four" />
      </div>
    </section>
  );
};

export default Shimmer;
