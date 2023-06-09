import styled from "styled-components";

export default function IconesConcluidos(props){
    const {src, dataTest} = props;
    console.log(props);
    return(
        <ContainerIcones>
            <img data-test={dataTest} src={src}/>
        </ContainerIcones>
    );
}

const ContainerIcones = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 23px;
    width: 100%;
    img{
        margin-left: 1.7px;
        margin-right: 1.7px;
        margin-top: 3px;
        margin-bottom: 5px; 
    }
`;