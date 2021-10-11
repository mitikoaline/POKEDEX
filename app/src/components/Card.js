import styled from "styled-components";

const Div = styled.div`
  background: #AEE3FB;
  margin-top: 5px;
  border-radius: 8px;
  width: 150px;
  padding-top: 10px;
  padding-bottom: 10px;
`

function Card({name, image, number, kind}) {
    return (
      <Div className="card">
        <img src={image}/>
        <h3>{name}</h3>
        <p>#{number}</p>
        <p>{kind}</p>
      </Div>
    );
}

export default Card;
