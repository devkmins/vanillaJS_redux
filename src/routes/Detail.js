import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
  const params = useParams();
  const newToDos = toDos.find((toDo) => toDo.id === Number(params.id));

  return <h1>{newToDos.text}</h1>;
}

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
