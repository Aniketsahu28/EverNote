import Notes from "./Notes";

const Home = (props) => {
  const { showAlert } = props;
  return (
    <div style={{ backgroundColor: "D9D9D9" }}>
      <Notes showAlert={showAlert} />
    </div>
  );
};

export default Home;
